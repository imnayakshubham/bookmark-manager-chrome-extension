# Bookmark Manager

A Chrome extension for managing bookmarks. This extension enables users to efficiently search, copy, delete, and organize their bookmarks with ease. Includes additional features such as sorting by date and bookmarking the current tab.

---

## Features

- **Search Functionality:** Fuzzy search across bookmark titles and URLs for quick access.
- **Copy URLs:** Copy any bookmark URL to the clipboard with a single click.
- **Delete Bookmarks:** Easily remove unwanted bookmarks.
- **Sort Bookmarks:** Sort bookmarks by `Most Recent` or `Oldest` based on the date they were added.
- **Bookmark Current Tab:** Quickly add the currently active tab as a new bookmark.
- **User-Friendly Interface:** Responsive and intuitive UI built with React, Tailwind CSS, and Fuse.js.

---

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/imnayakshubham/bookmark-manager-chrome-extension.git
   cd bookmark-manager-chrome-extension
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the extension:

   ```bash
   npm run build
   ```

4. Load the extension into Chrome:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer Mode** in the top-right corner.
   - Click on **Load unpacked** and select the `dist` folder from the project directory.

---

## Usage

1. Open the extension by clicking the bookmark manager icon in the browser toolbar.
2. Use the search bar to find bookmarks by title or URL.
3. Sort bookmarks using the dropdown menu for `Most Recent` or `Oldest` sorting.
4. Use the provided buttons to:
   - **Copy:** Copy the bookmark URL to the clipboard.
   - **Delete:** Remove the bookmark.
   - **Open in New Tab:** Open the bookmark in a new browser tab.
5. Bookmark the current tab by clicking the "Bookmark Current Tab" button.

---

## Development

1. Run the project in development mode:

   ```bash
   npm run dev
   ```

2. Open Chrome and load the extension from the `dist` folder as described in the installation steps.
3. Make changes in the codebase. The extension will automatically update in development mode.

---

## Technologies Used

- **React:** Frontend framework for building a responsive UI.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Fuse.js:** Fuzzy search implementation for bookmark search.
- **Chrome Bookmarks API:** For interacting with browser bookmarks.

---

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add new feature or fix"
   ```

4. Push the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request describing your changes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [React Icons](https://react-icons.github.io/react-icons/) for bookmark manager icons.
- [Fuse.js](https://fusejs.io/) for implementing fuzzy search functionality.
- [Google Favicon API](https://www.google.com/s2/favicons) for fetching bookmark favicons.