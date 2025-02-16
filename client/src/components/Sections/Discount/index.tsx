import listProduct from '@/data/product-item';
import { ReactElement } from 'react';
import imageDiscount from '@assets/images/sell/discount.png';
import ProductItem from '@/components/Common/ProductItem';
import SwiperCommon from '@/components/Common/SwiperCommon';

const Discount = (): ReactElement => {
    const products = listProduct.filter((product) => product.price.discountedPrice);

    return (
        <section>
            <div id="discount-section" className="w-full">
                <div className="relative container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-10">
                    <div className="flex flex-row justify-center items-center mb-6">
                        <h2 className="text-4xl font-bold">Sản phẩm Đang giảm giá</h2>
                        <img src={imageDiscount} alt="Best Seller" className="w-24 h-full object-cover"></img>
                    </div>
                    <SwiperCommon
                        slidesPerView={3}
                        children={products.map((p) => <ProductItem item={p} />)}
                    />
                </div>
            </div>
        </section>
    );
};

export default Discount;