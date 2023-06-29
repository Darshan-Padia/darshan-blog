import { ThemeProvider } from '../theme-provider';
import {ThemeSwitcher} from '../theme-switcher'; 
import Image from 'next/image';
const Header = () => {
    return (
        <ThemeProvider 
         attribute="class" defaultTheme="system" enableSystem>
        <div className="flex w-full justify-between items-center pl-10 pr-10 pt-2 pb-2
                        bg-purple-500 text-white-500
                        dark:bg-gray-800 dark:text-white-500
                        sticky top-0 h-14

                        z-50
                        " >
            <div>
                <div className='items-center'>
                    <Image 
                    className='hover:scale-110 transition duration-300 ease-in-out transform cursor-pointer '
                        src="/blog_icon.png" alt="logo" width={50} height={50}
                     />
                   
                </div>
            </div>

            <div className='flex gap-4 items-center'>
                <p className='text-xl text-white font-bold cursor-pointer' >About us</p>
                <button
                className='bg-blue-500 hover:bg-blue-700
                 text-white font-bold py-2 px-4 rounded-full'
                >
                    Get Started
                </button>
                <ThemeSwitcher />

            </div>
        </div>
        
      </ThemeProvider>

        
    );
}

export default Header;