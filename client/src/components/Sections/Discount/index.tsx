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
                <div className="relative h-full container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-10">
                    <div className='h-full flex flex-col justify-between p-5'>
                        <div className="flex flex-row justify-center items-center mb-6">
                            <h2 className="text-4xl font-bold">Sản phẩm giảm giá</h2>
                            <img src={imageDiscount} alt="Best Seller" className="w-24 h-full object-cover"></img>
                        </div>
                        <div className='h-full'>
                            <SwiperCommon
                                children={products.map((p) => <ProductItem item={p} />)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discount;