import { useContext, useEffect, useState } from "react";
import { PopoverGroup } from "@headlessui/react";
import navItems from "@/data/nav-items";
import Logo from "./Logo";
import Sidebar from "./Navigation/Sidebar";
import DialogCommon from "@/components/Common/DialogCommon";
import Auth from "@/components/Auth";
import { AuthContext } from "@/providers/AuthProvider";
import User from "@/components/User";
const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeId, setActiveId] = useState<number>(1);

    const {isReady, handleOpenLogin, handleOpenRegister} = useContext(AuthContext);

    
    const handleNavClick = (id: number) => {
        setActiveId(id);
    };

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
        <header className="fixed flex justify-center dark:bg-gray-900 top-0 z-40 w-full max-md:h-[68px] h-[96px] p-5">
            <nav className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between">
                <Logo />
                <PopoverGroup className="hidden xl:flex xl:gap-x-12 text-xl font-semibold">
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
                    {!isReady && <div className="gap-5 font-semibold hidden xl:flex xl:flex-1 xl:justify-end text-xl">
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
                    </div>}
                    {isReady && <User />}
                    <div className="hidden items-center justify-center max-xl:flex">
                        <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-green-500 text-white rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-md:size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            
            <Sidebar
                isOpen={isSidebarOpen}
                activeId={activeId}
                handleCloseSidebar={() => setIsSidebarOpen(false)}
                handleNavClick={handleNavClick}
            />
        </header>
    );
};

export default Header;
