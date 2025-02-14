import listProduct from '@/data/product-item';
import { ReactElement, useEffect, useRef, useState } from 'react';
import imageDiscount from '@assets/images/sell/discount.png';
import ProductItem from '@/components/Common/ProductItem';
import SrollViewArrow from '@/components/Common/SrollViewArrow';
const Discount = (): ReactElement => {
    const products = listProduct.filter((product) => product.price.discountedPrice);

    const [title] = useState("discount")
    const [quantityAppears] = useState(3);
    const [top] = useState(1);
    const [bottom] = useState(quantityAppears);
    const [currentIndex, setCurrentIndex] = useState(top);

    const [render, setRender] = useState(false);

    useEffect(() => {
        const target = document.getElementById(`product-${title}-select-${currentIndex}`);

        if (target && render) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    }, [currentIndex])

    useEffect(() => {
        setRender(true)
    }, [])

    return (
        <div id={title} className="w-full">
            <div className="relative container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-10">
                <div className="flex flex-row justify-center items-center mb-6">
                    <h2 className="text-4xl font-bold">Sản phẩm Đang giảm giá</h2>
                    <img src={imageDiscount} alt="Best Seller" className="w-24 h-full object-cover"></img>
                </div>

                <div className="flex items-center">
                    <div className="flex w-full overflow-x-hidden space-x-4 px-4 py-2">
                        {products.map((product, index) => (
                            <ProductItem
                                title={title}
                                key={index}
                                item={product}
                                index={index}
                                quantityAppears={quantityAppears}
                            />
                        ))}
                    </div>

                    <SrollViewArrow
                        top={top}
                        step={2}
                        bottom={bottom}
                        max={products.length}
                        setCurrentIndex={setCurrentIndex}
                    />

                </div>
            </div>
        </div>
    );
};

export default Discount;