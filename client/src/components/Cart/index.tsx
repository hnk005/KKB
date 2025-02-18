import { ReactElement, useEffect, useState } from 'react';
import DialogCommon from '../Common/DialogCommon';
import listProduct from '@/data/product-item';
import { DialogPanel } from '@headlessui/react';
import { ProductInterface } from '@/core/interface';

const CartIcon = (): ReactElement => {

    const [quantityItem, setQuantity] = useState(3);
    const [openCart, setOpenCart] = useState(false);
    const [cartItems, setCartItems] = useState(listProduct.slice(0, 6).map((value) => ({...value, quantity: 1})));

    const shippingFee = 50000;
    const taxRate = 0.2;
    const subtotal = cartItems.reduce((total, item) => total + (item.price.discountedPrice ? item.price.discountedPrice : item.price.originalPrice) * item.quantity, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax + shippingFee;

    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    };

    // Xóa sản phẩm
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    useEffect(() => {
        setQuantity(cartItems.length);
    }, [cartItems])

    return (
        <>
            <div onClick={() => setOpenCart(true)} className="fixed z-[9999] bottom-20 right-6 bg-green-400 p-3 rounded-full shadow-lg cursor-pointer hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 max-md:size-7 font-extrabold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <div className="flex justify-center items-center w-5 h-5 absolute rounded-full bg-red-600 top-0 right-0">
                    <span className="text-white font-bold">{quantityItem}</span>
                </div>
            </div>
            <DialogCommon
                open={openCart}
                onClose={() => setOpenCart(false)}
                children={
                    <div className="fixed inset-0 w-screen overflow-y-auto">
                        <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative min-w-[90vw] bg-slate-900 transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                            >
                                <h2 className="text-2xl text-center font-bold p-2 mb-5">Giỏ Hàng</h2>
                                <div className="flex-1 flex flex-row max-lg:flex-col p-4">
                                    <div className="flex-1 flex flex-col max-h-[70vh] max-md:max-h-[50vh] min-w-[70%] overflow-x-hidden overflow-y-auto">
                                        {cartItems.length === 0 ? (
                                            <p className="text-gray-500 text-center">Giỏ hàng của bạn đang trống</p>
                                        ) : (
                                            cartItems.map(item => (
                                                <div key={item.id} className="flex max-sm:min-h-[50vh] max-sm:flex-col justify-center items-center border-b p-4 gap-3">
                                                    <img src={item.image} alt={item.name} className="w-32 rounded-lg" />
                                                    <div className="flex-1">
                                                        <p className="font-semibold max-sm:text-xl line-clamp-1">{item.name}</p>
                                                    </div>
                                                    <select
                                                        className="border p-1 rounded bg-slate-600"
                                                        value={item.quantity}
                                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                    >
                                                        {Array.from({ length: 99 }, (_, i) => i + 1).map(num => (
                                                            <option key={num} value={num}>{num}</option>
                                                        ))}
                                                    </select>
                                                    <span className="font-semibold max-sm:text-xl">{(item.price.discountedPrice ? item.price.discountedPrice * item.quantity : item.price.originalPrice * item.quantity).toLocaleString()}{item.price.unit}</span>
                                                    <button onClick={() => removeItem(item.id)} className="p-1 rounded-md max-sm:w-full bg-red-500 hover:underline">
                                                        Xóa
                                                    </button>
                                                </div>
                                            ))
                                        )}
                                    </div>

                                    <div className="flex-1 m-3 bg-slate-700 rounded-l p-4">
                                        <div className="flex justify-between">
                                            <span>Tạm tính</span>
                                            <span>{subtotal.toLocaleString()}đ</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Phí vận chuyển</span>
                                            <span>{shippingFee.toLocaleString()}đ</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Thuế</span>
                                            <span>{tax.toLocaleString()}đ</span>
                                        </div>
                                        <div className="flex justify-between font-bold text-lg mt-2">
                                            <span>Tổng cộng</span>
                                            <span>{total.toLocaleString()}đ</span>
                                        </div>
                                        <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                                            Tiếp tục thanh toán
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>

                }
            />
        </>

    );
};

export default CartIcon;
