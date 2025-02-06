import { ReactElement } from "react"
import { DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {
    PopoverGroup,
} from '@headlessui/react'

const Sidebar: React.FC<{ handleCloseSidebar: () => void }> = ({ handleCloseSidebar }): ReactElement => {
    return (
        <div className="md:flex lg:hidden">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                        >
                            <TransitionChild>
                                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                                    <button
                                        type="button"
                                        onClick={handleCloseSidebar}
                                        className="relative rounded-md text-gray-300 hover: focus:outline-none focus:ring-2 focus:ring-white"
                                    >
                                        <span className="absolute -inset-2.5" />
                                        <span className="sr-only">Close panel</span>
                                        <XMarkIcon aria-hidden="true" className="size-6" />
                                    </button>
                                </div>
                            </TransitionChild>
                            <div className="flex h-full flex-col bg-white py-6 shadow-xl">
                                <div className="relative h-[100%] overflow-y-scroll p-6 flex-2">
                                    <PopoverGroup className="flex flex-col gap-y-12 text-black">
                                        <a href="#" className="text-xl font-semibold">
                                            Sản Phẩm
                                        </a>
                                        <a href="#" className="text-xl font-semibold">
                                            Giảm giá
                                        </a>
                                        <a href="#" className="text-xl font-semibold">
                                            Liên hệ
                                        </a>
                                    </PopoverGroup>
                                </div>
                                <div className="relative flex flex-1 p-6 justify-center items-end">
                                    <div className="flex flex-col gap-5 w-[100%]">
                                        <button className="p-2 text-black rounded-lg focus:outline-none">
                                            Đăng nhập
                                        </button>
                                        <button className="p-2 bg-[#198f9f] hover:opacity-80 rounded-lg">
                                            Đăng ký
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;