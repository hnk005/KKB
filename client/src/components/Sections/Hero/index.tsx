import { ReactElement } from "react";
import keyboard from "@assets/images/product/keyboard.jpg";
import keycap from "@assets/images/product/keycap.png";

const Hero = (): ReactElement => {
    return (
        <div className="flex items-center justify-center min-h-screen px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">
                <div className="space-y-6">
                    <h1 className="text-5xl font-bold leading-tight">
                        Trải nghiệm bàn phím cơ đỉnh cao
                    </h1>
                    <p className="text-gray-400">
                        Switch siêu nhạy, keycap bền bỉ, LED RGB rực rỡ. Sẵn sàng nâng cấp setup của bạn ngay hôm nay!
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-green-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
                            Mua ngay
                        </a>
                        <a href="#" className="border border-green-500 px-6 py-3 rounded-lg text-lg font-semibold text-green-400 hover:bg-green-500 hover:text-white transition">
                            Xem thêm
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <div className="bg-green-500 w-64 h-64 rounded-full absolute -top-10 -right-10"></div>
                    <img src={keyboard}
                        alt="Bàn phím Monka"
                        className="relative w-full max-w-md mx-auto rounded-lg shadow-lg" />

                    <div className="absolute -bottom-6 -left-6 bg-gray-800 p-3 rounded-xl flex items-center space-x-3 shadow-lg">
                        <img src= {keycap}
                            alt="Keycap"
                            className="w-12 h-12 rounded-md" />
                        <p className="text-sm text-gray-300">Keycap PBT cao cấp</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;