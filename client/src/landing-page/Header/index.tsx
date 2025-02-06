import { ReactElement, useState } from 'react'
import {
    PopoverGroup,
} from '@headlessui/react'
import logo from "@assets/images/logo/Logo-with-text.png";
import ShoppingCart from './ShoppingCart';
import navItems from '@/data/nav-items';


const Header: React.FC<{ handleOpenSidebar: () => void }> = ({ handleOpenSidebar }): ReactElement => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-transparent">
            <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-8 max-h-[96px] min-h-[48] h-[10vw]">
                <div className="flex lg:flex-1 select-none">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src={logo}
                            className="h-12 w-auto max-md:h-9"
                        />
                    </a>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12 text-xl font-semibold ">
                    {navItems.map((nav) =>
                        <a href={nav.path}>
                            {nav.title}
                        </a>
                    )}
                </PopoverGroup>
                <div className="flex flex-1 lg:hidden justify-end  gap-5 cursor-pointer" onClick={handleOpenSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end  gap-5">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg> */}
                    {/* <ShoppingCart /> */}
                    <div className="flex gap-5 ">
                        <button className="p-2 rounded-lg focus:outline-none">
                            Đăng nhập
                        </button>
                        <button className="p-2 bg-[#198f9f] hover:opacity-80 rounded-lg">
                            Đăng ký
                        </button>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header;