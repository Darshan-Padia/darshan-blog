import { ThemeProvider } from "../theme-provider";
import { ThemeSwitcher } from "../theme-switcher";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div
                className=" pl-1 pr-1 flex w-full justify-between items-center sm:pl-10 sm:pr-10 pt-2 pb-2
                        bg-purple-500 text-white-500
                        dark:bg-gray-800 dark:text-white-500
                        sticky top-0 h-14
                        z-50

                        "
            >
                <div>
                    <div className="items-center">
                        <Link
                        href="/"
                        >
                            <Image
                                className="hover:scale-110 transition duration-300 ease-in-out transform cursor-pointer "
                                src="/blog_icon.png"
                                alt="logo"
                                width={50}
                                height={50}
                            />
                        </Link>
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                    <Link href="/about_us">
                        <p className="text-xl text-white font-bold cursor-pointer">
                            About us
                        </p>
                    </Link>
                    {/* <button
                        className="bg-blue-500 hover:bg-blue-700
                 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Get Started
                    </button> */}
                    <ThemeSwitcher />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Header;
