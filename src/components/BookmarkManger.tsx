import { useState, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
import { MdBookmarkRemove } from 'react-icons/md';
import { IoMdCopy } from 'react-icons/io';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { FaFrownOpen } from 'react-icons/fa';

type Bookmark = {
    id: string;
    title: string;
    url?: string;
    dateAdded?: number;
    children?: Bookmark[];
};

const BookmarkManager = () => {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    useEffect(() => {
        chrome.bookmarks.getTree((bookmarkTreeNodes) => {
            const uniqueBookmarks = extractUniqueBookmarks(bookmarkTreeNodes);
            setBookmarks(sortBookmarks(uniqueBookmarks, sortOrder));
        });
    }, [sortOrder]);

    const extractUniqueBookmarks = (nodes: Bookmark[]): Bookmark[] => {
        const uniqueUrls = new Set<string>();
        const uniqueList: Bookmark[] = [];

        const traverse = (nodes: Bookmark[]) => {
            nodes.forEach((node) => {
                if (node.url && !uniqueUrls.has(node.url)) {
                    uniqueUrls.add(node.url);
                    uniqueList.push({ id: node.id, title: node.title, url: node.url, dateAdded: node.dateAdded });
                }
                if (node.children) traverse(node.children);
            });
        };

        traverse(nodes);
        return uniqueList;
    };

    const sortBookmarks = (bookmarks: Bookmark[], order: 'asc' | 'desc'): Bookmark[] => {
        return [...bookmarks].sort((a, b) =>
            order === 'asc'
                ? (a.dateAdded ?? 0) - (b.dateAdded ?? 0)
                : (b.dateAdded ?? 0) - (a.dateAdded ?? 0)
        );
    }

    const fuse = useMemo(() => {
        return new Fuse(bookmarks, {
            keys: ['title', 'url'],
            threshold: 0.3,
        });
    }, [bookmarks]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const filteredBookmarks = useMemo(() => {
        if (!searchQuery) return bookmarks;
        const results = fuse.search(searchQuery).map((result) => result.item);
        return results;
    }, [searchQuery, fuse, bookmarks]);

    const saveCurrentTab = () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs?.length > 0) {
                const currentTab = tabs[0];
                if (!currentTab?.url) {
                    alert('No active tab URL found!');
                    return;
                }

                const tabExists = bookmarks.some((bookmark) => bookmark.url === currentTab.url);

                if (tabExists) {
                    alert('Bookmark already exists!');
                } else {
                    chrome.bookmarks.create(
                        { title: currentTab.title || 'Untitled', url: currentTab.url },
                        (createdBookmark) => {
                            if (createdBookmark) {
                                setBookmarks((prev) => [createdBookmark, ...prev]);
                                alert('Bookmark added successfully!');
                            } else {
                                alert('Failed to save bookmark!');
                            }
                        }
                    );
                }
            } else {
                alert('No active tab found!');
            }
        });
    };

    const getFaviconUrl = (url: string | undefined) => {
        if (!url) return '';
        const domain = new URL(url).origin;
        return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
    };

    const handleDelete = (id: string) => {
        chrome.bookmarks.remove(id, () => {
            setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== id));
            alert('Bookmark deleted successfully!');
        });
    };

    const handleCopyUrl = (url: string) => {
        navigator.clipboard.writeText(url);
        alert('Copied to clipboard!');
    };

    const handleOpenInNewTab = (url: string) => {
        chrome.tabs.create({ url });
    };

    return (
        <div className="p-4 flex flex-col gap-2 bg-gray-100" style={{ width: '600px' }}>
            <div className='sticky flex flex-col gap-2 py-2 z-30 top-0 bg-gray-100'>
                <div className='flex items-center justify-between gap-2 align-middle'>
                    <h1 className="text-2xl font-bold text-gray-800">Bookmark Manager</h1>

                    <button
                        onClick={saveCurrentTab}
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Bookmark Current Tab
                    </button>
                </div>

                <div className="">
                    <input
                        type="text"
                        placeholder="Search bookmarks..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="border p-2 rounded w-full"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-700">Sort By:</label>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                        className="border p-2 rounded"
                    >
                        <option value="desc">Most Recent First</option>
                        <option value="asc">Oldest First</option>
                    </select>
                </div>
            </div>
            {/* Bookmarks List */}
            <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Bookmarks:</h2>
                <ul className="space-y-4">
                    {filteredBookmarks.length ?
                        filteredBookmarks.map((bookmark) => (
                            <li
                                key={bookmark.id}
                                className="flex items-center bg-white shadow p-4 rounded hover:bg-gray-50 transition"
                            >
                                {/* Favicon */}
                                <img
                                    src={getFaviconUrl(bookmark.url)}
                                    alt="Favicon"
                                    className="w-12 h-12 rounded-full mr-4 cursor-pointer"
                                    onClick={() => chrome.tabs.create({ url: bookmark.url })}
                                />

                                <div className="flex-1 flex-wrap text-clip overflow-hidden">
                                    <p className="text-gray-800 font-medium text-lg">{bookmark.title || 'Untitled'}</p>


                                </div>

                                <div className="lex gap-1 flex-col items-center">
                                    <button
                                        disabled={!bookmark.url}
                                        onClick={() => bookmark.url && handleCopyUrl(bookmark.url)}
                                        className="font-extrabold text-3xl underline text-gray-500 hover:text-gray-700"
                                    >
                                        <IoMdCopy />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(bookmark.id)}
                                        className="font-extrabold text-3xl underline text-red-500 hover:text-red-700"
                                    >
                                        <MdBookmarkRemove />
                                    </button>
                                    <button
                                        disabled={!bookmark.url}
                                        onClick={() => bookmark.url && handleOpenInNewTab(bookmark.url)}
                                        className="font-extrabold text-3xl underline text-blue-500 hover:text-blue-700"
                                    >
                                        <RxOpenInNewWindow />
                                    </button>
                                </div>

                            </li>
                        )) : <div className='flex items-center gap-2 flex-col align-middle'>
                            <FaFrownOpen className='font-extrabold text-9xl' />

                            <h3 className='font-extrabold text-xl'>
                                No Bookmarks!!!
                            </h3>
                        </div>}
                </ul>
            </div>
        </div>
    );
};

export default BookmarkManager;