import listProduct from '@/data/product-item';
import { ReactElement, useState } from 'react';
import ProductItem from '@/components/Common/ProductItem';
import SwiperCommon from '@/components/Common/SwiperCommon';

const Nomarl = (): ReactElement => {
    const products = listProduct;
    
    const [title] = useState("nomarl")

    return (
        <div id={title} className="w-full bg-slate-950">
            <div className="relative container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-10">
                <h2 className="text-4xl text-center mb-6 font-bold">Sản phẩm</h2>
                <SwiperCommon
                    slidesPerView={3}
                    children={products.map((p) => <ProductItem item={p}/>)}
                />
            </div>
        </div>
    );
};

export default Nomarl;