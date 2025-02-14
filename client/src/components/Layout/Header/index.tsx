import { ReactElement, useState } from 'react'
import {
    PopoverGroup,
} from '@headlessui/react'
import logo from "@assets/images/logo/Logo.png";
import navItems from '@/data/nav-items';

const Header = (): ReactElement => {
    return (
        <header className="bg-transparent">
            <nav aria-label="Global" className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between p-6 lg:px-8 max-h-[96px] min-h-[48] h-[10vw]">
                <div className="flex lg:flex-1 select-none">
                    <a href="/" className="flex -m-1.5 p-1.5 items-center">
                        <img
                            alt=""
                            src={logo}
                            className="h-20 w-auto max-md:h-16"
                        />
                        <span className="text-2xl font-semibold text-green-400">KKB</span>
                    </a>
                </div>
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