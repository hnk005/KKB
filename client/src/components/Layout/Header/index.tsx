import { useCallback, useEffect, useState } from "react";
import { Dialog, PopoverGroup } from "@headlessui/react";
import navItems, { NavItem } from "@/data/nav-items";
import Logo from "./Logo";
import Sidebar from "./Navigation/Sidebar";
import DialogCommon from "@/components/Common/DialogCommon";
import Auth from "@/components/Auth";

const Header = () => {
    const [sticky, setSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeId, setActiveId] = useState<number>(1);
    const [openAuth, setOpenAuth] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const handleScroll = useCallback(() => {
        setSticky(window.scrollY >= 20);
    }, []);

    const handleNavClick = (id: number) => {
        setActiveId(id);
    };

    const handleOpenLogin = () => {
        setOpenAuth(true);
        setOpenLogin(true);
    }

    const handleOpenRegister = () => {
        setOpenAuth(true);
        setOpenLogin(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const section = navItems.find((item) => item.path === `#${entry.target.id}`);
                        if (section) {
                            setActiveId(section.id);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        navItems.forEach((item) => {
            const section = document.querySelector(item.path);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className={`fixed flex justify-center top-0 z-40 w-full transition-all duration-300 ${sticky ? "shadow-lg bg-white dark:bg-gray-900 py-4" : "shadow-none py-8"}`}>
            <nav className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between p-6 lg:px-8 h-[96px]">
                <Logo />
                <PopoverGroup className="hidden lg:flex lg:gap-x-12 text-xl font-semibold">
                    {navItems.map((nav) => (
                        <a
                            key={nav.id}
                            href={nav.path}
                            onClick={() => handleNavClick(nav.id)}
                            className={`hover:text-green-400 transition ${activeId === nav.id ? "text-green-400 font-semibold" : ""}`}
                        >
                            {nav.title}
                        </a>
                    ))}
                </PopoverGroup>
                <div className="flex gap-5 p-5 lg:flex-1 lg:justify-end">
                    <div className="gap-5 font-semibold hidden lg:flex lg:flex-1 lg:justify-end text-xl">
                        <button
                            className="p-2 hover:bg-green-400 rounded-lg focus:outline-none"
                            onClick={handleOpenLogin}
                        >
                            Đăng nhập
                        </button>
                        <button
                            className="p-2 bg-green-500 hover:opacity-80 rounded-lg"
                            onClick={handleOpenRegister}
                        >
                            Đăng ký
                        </button>
                    </div>
                    <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-green-500 text-white rounded max-lg:flex hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-md:size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

            </nav>
            <DialogCommon
                open={openAuth}
                onClose={() => setOpenAuth(false)}
                children={<Auth onClose={() => setOpenAuth(false)} openLogin={openLogin} />}
            />
            {/* Sidebar Component */}
            <Sidebar
                isOpen={isSidebarOpen}
                activeId={activeId}
                handleCloseSidebar={() => setIsSidebarOpen(false)}
                handleNavClick={handleNavClick}
                handleOpenLogin={handleOpenLogin}
                handleOpenRegister={handleOpenRegister}
            />
        </header>
    );
};

export default Header;
