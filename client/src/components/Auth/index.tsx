import { DialogPanel } from "@headlessui/react";
import { useState } from "react";
import logo from "@assets/images/logo/Logo.png";
import Login from "./Login";
import Register from "./Register";

interface AuthProps {
    openLogin: boolean;
    onClose: () => void;
}

const Auth: React.FC<AuthProps> = ({ openLogin, onClose}) => {
    const [isLogin, setIsLogin] = useState(openLogin);

    return (
        <div className="fixed inset-0 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                >
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                alt=""
                                src={logo}
                                className="mx-auto h-20 w-auto"
                            />
                            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                                {isLogin ? "Đăng nhập" : "Đăng ký"}
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            {isLogin ? <Login /> : <Register />}
                            <p className="mt-10 text-center text-sm/6 text-gray-500">
                                {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}{' '}
                                <button className="font-semibold text-green-400 hover:text-green-600" onClick={() => setIsLogin(!isLogin)}>
                                    {isLogin ?  "Đăng ký" : "Đăng nhập"}
                                </button>
                            </p>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </div>
    );
};

export default Auth;
