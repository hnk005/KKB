import { act, ReactElement, useCallback, useEffect, useState } from 'react'
import {
    PopoverGroup,
} from '@headlessui/react';
import navItems from '@/data/nav-items';
import Logo from './Logo';

const Header = (): ReactElement => {
    const [sticky, setSticky] = useState(false);

    const handleScroll = useCallback(() => {
        setSticky(window.scrollY >= 100);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 z-40 w-full transition-all duration-300 ${sticky ? " shadow-lg bg-white dark:bg-gray-900 py-4" : "shadow-none py-8"
                }`}
        >
            <nav aria-label="Global" className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between p-6 lg:px-8 max-h-[96px] min-h-[48] h-[10vw]">
                <Logo />
                <PopoverGroup className="hidden lg:flex lg:gap-x-12 text-xl font-semibold ">
                    {navItems.map((nav, index) =>
                        <a key={index} href={nav.path}>
                            {nav.title}
                        </a>
                    )}
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end  gap-5">
                    <div className="flex gap-5 font-semibold">
                        <button className="p-2 hover:bg-green-400 rounded-lg focus:outline-none">
                            Đăng nhập
                        </button>
                        <button className="p-2 bg-green-500 hover:opacity-80 rounded-lg">
                            Đăng ký
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;