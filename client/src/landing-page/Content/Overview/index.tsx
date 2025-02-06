import { ProductItem } from "@/core/interface";
import productItems from "@/data/product-item";
import { useState } from "react";
import Product from "./Product";

const Overviews = () => {
    const [product, setProduct] = useState<ProductItem>(productItems[0]);
    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="flex xs: flex-col-reverse lg:flex-row p-5 max-lg:gap-5 gap-[10%]">
                <Product
                    product={product}
                />
            </div>
        </div>
    )
}

export default Overviews;