import listProduct from '@/data/product-item';
import { ReactElement } from 'react';
import ProductItem from '@/components/Common/ProductItem';
import SwiperCommon from '@/components/Common/SwiperCommon';

const Nomarl = (): ReactElement => {
    const products = listProduct;

    return (
        <section>
            <div id="nomarl-section"className="w-full bg-slate-950 ">
                <div className="relative h-full container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-10">
                    <div className='h-full flex flex-col justify-between p-5'>
                        <h2 className="text-4xl font-bold mb-6">Sản phẩm</h2>
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

export default Nomarl;