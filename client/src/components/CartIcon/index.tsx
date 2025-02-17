import { ReactElement } from 'react';

const CartIcon = (): ReactElement => {
    return (
        <div className="fixed z-[9999] bottom-20 right-6 bg-green-400 p-3 rounded-full shadow-lg cursor-pointer hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 max-md:size-7 font-extrabold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <div className="flex justify-center items-center w-5 h-5 absolute rounded-full bg-red-600 top-0 right-0">
                <span className="text-white font-bold">3</span>
            </div>
        </div>
    );
};

export default CartIcon;
