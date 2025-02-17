import { ReactElement } from "react";
import { Transition } from "@headlessui/react";
import navItems from "@data/nav-items";
import Logo from "../../Logo";

interface SideBarProps {
    isOpen: boolean;
    activeId: number;
    handleCloseSidebar: () => void;
    handleNavClick: (id: number, path: string) => void;
    handleOpenLogin: () => void;
    handleOpenRegister: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({ 
    activeId, isOpen, handleCloseSidebar, 
    handleNavClick, handleOpenLogin,
    handleOpenRegister}): ReactElement => {
    return (
        <Transition show={isOpen} as="div" className="relative z-50">
            <Transition.Child
                as="div"
                enter="duration-300 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-200 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
                onClick={handleCloseSidebar}
            />
            <Transition.Child
                as="div"
                enter="transform transition ease-in-out duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-200"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
                className="fixed inset-y-0 left-0 w-72 bg-white dark:bg-gray-900 shadow-lg flex flex-col p-6"
            >
                {/* Header */}
                <div className="flex items-center justify-between">
                    <Logo />
                    <button onClick={handleCloseSidebar} className="text-gray-500 hover:text-gray-800 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="mt-8 flex flex-col space-y-4">
                    {navItems.map((nav) => (
                        <a
                            key={nav.id}
                            href={nav.path}
                            onClick={() => handleNavClick(nav.id, nav.path)}
                            className={`text-left hover:text-green-400 max-sm:text-base text-xl transition ${activeId === nav.id ? "text-green-400 font-semibold" : "dark:text-gray-300"
                                }`}
                        >
                            {nav.title}
                        </a>
                    ))}
                </nav>
                <div className="mt-auto space-y-3">
                    <button onClick={handleOpenLogin} className="w-full py-2 text-gray-800 dark:text-white rounded-lg hover:bg-green-500 dark:hover:bg-green-400">
                        Đăng nhập
                    </button>
                    <button onClick={handleOpenRegister} className="w-full py-2 bg-green-500 text-white rounded-lg hover:opacity-80">
                        Đăng ký
                    </button>
                </div>
            </Transition.Child>
        </Transition>
    );
};

export default Sidebar;
