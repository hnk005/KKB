const Contact = () => {
    return (
        <div id="contact" className="bg-black text-white py-16 px-6 text-center">
            <h2 className="text-4xl font-semibold mb-6">Liên hệ</h2>
            <p className="max-w-3xl mx-auto text-2xl">
                Chúng tôi nhận đặt hàng đến 23:00. Bạn có thể thanh toán đơn hàng trên trang web
                hoặc thanh toán bằng tiền mặt cho người chuyển phát nhanh của chúng tôi.
            </p>

            {/* Thông tin liên hệ */}
            <div className="mt-10 flex flex-col md:flex-row justify-center gap-12 items-center">
                {/* Liên hệ */}
                <div className="flex flex-col items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <h3 className="text-xl font-medium">Liên hệ</h3>
                    <p>+84-356-333-130</p>
                    <p>huynhnamkha512020@gmail.com</p>
                </div>

                {/* Địa chỉ */}
                <div className="flex flex-col items-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 10c0 7-7 12-7 12s-7-5-7-12a7 7 0 1114 0z"
                        />
                    </svg>
                    <h3 className="text-xl font-medium">Địa chỉ</h3>
                    <p>34, đường số 9 Phạm Hùng, Bình Hưng, Bình Chánh</p>
                </div>

                {/* Thời gian làm việc */}
                <div className="flex flex-col items-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6l4 2"
                        />
                        <circle cx="12" cy="12" r="9" />
                    </svg>
                    <h3 className="text-xl font-medium">Thời gian làm việc</h3>
                    <p>Hằng ngày</p>
                    <p>9:00 - 23:00</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
