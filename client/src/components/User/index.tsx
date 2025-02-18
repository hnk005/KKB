import { useContext, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { AuthContext } from "@/providers/AuthProvider";

const User = () => {
    const {logout} = useContext(AuthContext);
    return (
        <Menu as="div" className="relative w-[20vw] min-w-28 flex text-left justify-end">
            <div>
                <MenuButton className="flex w-full justify-center items-center gap-5 rounded-mdp-2 text-sm font-semibold shadow-xs">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="inline-block size-10 rounded-full ring-2 ring-white"
                    />
                    <span className="line-clamp-2 max-sm:hidden"> Xin chào, User </span>
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 top-10 z-10 p-2 mt-2 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm rounded-md text-gray-700 hover:bg-green-500 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            Tôi
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="#contact-section"
                            className="block px-4 py-2 text-sm rounded-md text-gray-700 hover:bg-green-500 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                            Hỗ trợ
                        </a>
                    </MenuItem>
                    <form action="#" method="POST">
                        <MenuItem>
                            <button
                                onClick={logout}
                                type="submit"
                                className="block w-full px-4 rounded-md py-2 text-left  hover:bg-red-500 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                            >
                                Đăng xuất
                            </button>
                        </MenuItem>
                    </form>
                </div>
            </MenuItems>
        </Menu>
    );
};

export default User;
