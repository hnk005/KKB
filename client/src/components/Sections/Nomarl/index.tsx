import listProduct from '@/data/product-item';
import { ReactElement } from 'react';
import ProductItem from '@/components/Common/ProductItem';
import SwiperCommon from '@/components/Common/SwiperCommon';

const Nomarl = (): ReactElement => {
    const products = listProduct;

    return (
        <section id="nomarl-section">
            <div className="w-full bg-slate-950">
                <div className="relative container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-10">
                    <h2 className="text-4xl text-center mb-6 font-bold">Sản phẩm</h2>
                    <SwiperCommon
                        slidesPerView={3}
                        children={products.map((p) => <ProductItem item={p} />)}
                    />
                </div>
            </div>
        </section>

    );
};

export default Nomarl;