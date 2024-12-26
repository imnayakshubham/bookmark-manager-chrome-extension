
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ArrowRightIcon, ChromeIcon, CloudIcon, FolderSyncIcon } from 'lucide-react'
import { Link } from "react-router-dom";

export default function LandingPage() {


    return (
        <>
            <main className="flex-1">
                <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,70%,40%),hsl(24,62%,73%,80%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4 max-w-6xl text-balance">
                        Manage All Your Bookmarks in One Place
                    </h1>
                    <p className="text-lg lg:text-3xl max-w-screen-xl">
                        Simplify your browsing experience. Sync and organize bookmarks from all your browsers in a single,
                        easy-to-use platform.
                    </p>
                    <Link to="/dashboard" className="flex items-center justify-center rounded-md bg-gray-900 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 p-2 group gap-2">
                        Get started for free
                        <ArrowRightIcon className="size-8 group-hover:animate-jello" />
                    </Link>
                </section>

                <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                            <Card>
                                <CardHeader>
                                    <FolderSyncIcon className="h-10 w-10 mb-2 text-primary" />
                                    <CardTitle>Cross-Browser Sync</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Seamlessly sync bookmarks from Chrome, Firefox, Safari, and more.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CloudIcon className="h-10 w-10 mb-2 text-primary" />
                                    <CardTitle>Cloud Storage</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Access your bookmarks from any device, anytime, anywhere.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <ChromeIcon className="h-10 w-10 mb-2 text-primary" />
                                    <CardTitle>Smart Organization</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Automatically categorize and tag your bookmarks for easy retrieval.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 items-start">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white">
                                    1
                                </div>
                                <h3 className="mt-4 text-xl font-bold">Sign Up</h3>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">Create your account in seconds</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white">
                                    2
                                </div>
                                <h3 className="mt-4 text-xl font-bold">Connect Browsers</h3>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">Link your favorite browsers</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white">
                                    3
                                </div>
                                <h3 className="mt-4 text-xl font-bold">Manage Bookmarks</h3>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">Organize and access your bookmarks easily</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple Pricing</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Basic</CardTitle>
                                    <CardDescription>For casual users</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold">$0</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Free forever</p>
                                    <ul className="mt-4 space-y-2">
                                        <li>Up to 1000 bookmarks</li>
                                        <li>Sync 2 browsers</li>
                                        <li>Basic organization</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Get Started</Button>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Pro</CardTitle>
                                    <CardDescription>For power users</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold">$4.99</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                                    <ul className="mt-4 space-y-2">
                                        <li>Unlimited bookmarks</li>
                                        <li>Sync unlimited browsers</li>
                                        <li>Advanced organization</li>
                                        <li>Priority support</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Upgrade to Pro</Button>
                                </CardFooter>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Team</CardTitle>
                                    <CardDescription>For collaborators</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold">$9.99</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">per user/month</p>
                                    <ul className="mt-4 space-y-2">
                                        <li>All Pro features</li>
                                        <li>Team sharing</li>
                                        <li>Admin controls</li>
                                        <li>API access</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Contact Sales</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section> */}
                {/* <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                            <Card>
                                <CardContent className="mt-4">
                                    <p className="text-gray-500 dark:text-gray-400">
                                        "This app has revolutionized how I manage my bookmarks. It's so easy to use and keeps everything
                                        organized across all my devices."
                                    </p>
                                    <p className="mt-4 font-semibold">- Sarah K., Designer</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="mt-4">
                                    <p className="text-gray-500 dark:text-gray-400">
                                        "As a developer, I juggle multiple browsers daily. This tool has been a game-changer for my
                                        productivity."
                                    </p>
                                    <p className="mt-4 font-semibold">- Alex M., Software Engineer</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="mt-4">
                                    <p className="text-gray-500 dark:text-gray-400">
                                        "The team plan has made collaboration so much easier. We can share resources effortlessly now."
                                    </p>
                                    <p className="mt-4 font-semibold">- Emily R., Project Manager</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section> */}
                <section className="w-full py-12 md:py-24 lg:py-32 ">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Ready to Simplify Your Bookmarks?
                                </h2>
                            </div>
                            <Link to="/dashboard" className="flex items-center justify-center rounded-md bg-gray-900 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 p-2 group gap-2">
                                Get started for free
                                <ArrowRightIcon className="size-8 group-hover:animate-jello" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Bookmark Manager. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <a className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </a>
                    <a className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </a>
                </nav>
            </footer>
        </>
    )
}

export function CustomButton() {
    return (
        <Link
            to="/your-path"
            className="flex items-center justify-center px-4 py-2 bg-[#006aff] border-8 border-[#c0dfff] text-white gap-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-[#1b7aff] hover:border-[#b1d8ff] active:border-[2px] active:border-[#c0dfff]"
        >
            <span className="text-[1em] font-bold tracking-[1px]">Discover</span>
            <span className="pt-[2px] h-full w-fit">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="20"
                    viewBox="0 0 38 15"
                    fill="none"
                    className="w-[50px] h-[30px] transform-origin-left transition-transform duration-900 hover:animate-jello"
                >
                    <path
                        fill="white"
                        d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
                    ></path>
                </svg>
            </span>
        </Link>
    );
}



