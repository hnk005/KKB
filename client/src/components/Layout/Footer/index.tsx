import navItems from "@/data/nav-items";

const Footer = () => {
    return (
        <footer className=" text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Logo & Giới thiệu */}
                <div>
                    <h2 className="text-2xl max-lg:text-lg font-bold">KKB</h2>
                    <p className="text-gray-400 mt-2">
                        KKB cung cấp những sản phẩm bàn phím chất lượng cao với nhiều ưu đãi hấp dẫn.
                    </p>
                </div>

                {/* Liên kết nhanh */}
                <div>
                    <h3 className="text-2xl max-lg:text-lg  font-semibold mb-3">Liên kết</h3>
                    <ul className="text-gray-400 space-y-2">
                        {navItems.map((item) => (
                            <li>
                                <a href= {item.path} className="hover:text-white transition">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Liên hệ */}
                <div>
                    <h3 className="text-2xl max-lg:text-lg  font-semibold mb-3">Liên hệ</h3>
                    <p className="text-gray-400">📍 34, đường số 9 Phạm Hùng, Bình Chánh</p>
                    <p className="text-gray-400">📞 +84-356-333-130</p>
                    <p className="text-gray-400">✉ huynhnamkha512020@gmail.com</p>
                </div>

                {/* Mạng xã hội */}
                <div>
                    <h3 className="text-2xl max-lg:text-lg font-semibold mb-3">Kết nối với chúng tôi</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/huynh.namkha.12" className="hover:text-gray-400 transition">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.82 3.43 8.84 8 9.8v-6.92h-2.4v-2.88H10V9.68c0-2.35 1.4-3.68 3.54-3.68 1.02 0 2.1.18 2.1.18v2.32h-1.2c-1.18 0-1.54.74-1.54 1.5v1.8h2.6l-.42 2.88h-2.18v6.92c4.57-.96 8-4.98 8-9.8z"></path>
                            </svg>
                        </a>
                        <a href="https://x.com/hk0356333" className="hover:text-gray-400 transition">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19.6 6.4c-.7.3-1.4.5-2.2.6a3.8 3.8 0 001.6-2.1 7.7 7.7 0 01-2.4.9A3.8 3.8 0 0012 7.9a10.7 10.7 0 01-7.7-3.9 3.8 3.8 0 001.2 5 3.8 3.8 0 01-1.7-.5v.1c0 1.8 1.3 3.3 3 3.6a4 4 0 01-1.7.1 3.8 3.8 0 003.6 2.7A7.7 7.7 0 014 16.6 11 11 0 0010 18c6.9 0 10.7-5.7 10.7-10.7 0-.2 0-.4-.1-.6A7.7 7.7 0 0022 5.7a7.7 7.7 0 01-2.4.7z"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/hnkvng" className="hover:text-gray-400 transition">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 2a10 10 0 00-10 10c0 4.4 2.9 8.2 6.9 9.6.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.3-3.4-1.3a2.6 2.6 0 00-1.1-1.5c-.9-.6.1-.6.1-.6a2 2 0 011.5 1 2 2 0 002.6.8 2 2 0 01.6-1.4c-2.3-.3-4.7-1.1-4.7-5 0-1 .4-1.9 1-2.5-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.6 1a8.7 8.7 0 014.8 0c1.8-1.3 2.6-1 2.6-1 .6 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.5 0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5 4-1.4 6.9-5.2 6.9-9.6A10 10 0 0012 2z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
                © {new Date().getFullYear()} KKB. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
