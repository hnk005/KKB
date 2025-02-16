import listProduct from '@/data/product-item';
import { ReactElement, useState } from 'react';
import imageBestSeller from '@assets/images/sell/best-seller.png';
import ProductItem from '@/components/Common/ProductItem';
import SwiperCommon from '@/components/Common/SwiperCommon';

const BestSeller = (): ReactElement => {
    const products = listProduct.filter((product) => product.bestSaller);
    return (
        <section>
            <div id= "best-seller-section" className="w-full bg-slate-950">
                <div className="relative container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-10">
                    <div className="flex flex-row justify-center items-center mb-6">
                        <h2 className="text-4xl font-bold">Sản phẩm bán chạy</h2>
                        <img src={imageBestSeller} alt="Best Seller" className="w-24 h-full object-cover"></img>
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

export default BestSeller;
