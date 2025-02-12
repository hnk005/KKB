import { useEffect, useState } from "react";
import listProduct from "@data/product-item";
import { PRODUCT_ITEM } from "@/core/interface";
import ProductItem from "./Product";
const Overviews = () => {
    const [listProductBestSeller] = useState(listProduct.map((p) => {
        const listVar = p.variants.filter((v) => v.bestSeller);
        return listVar.map((v) => (
            {  
                id: v.id,
                name: p.name,
                brand: p.brand,
                price: v.price,
                SKU: v.SKU,
                image: v.image,
                status: v.status,
                rate: v.rate,
                quantityRate: v.quantityRate,
                option: v.option,
                originalPrice: v.originalPrice,
                originalUnit: v.originalUnit,
                quantity: v.quantity,
                info: p.info,
            }
        ))
    }).flat())
    const [showProduct, setShowProduct] = useState<PRODUCT_ITEM>(listProductBestSeller[0]);
    const handleNext = () => {
        const firstItem = listProductBestSeller.shift(); 
        if (firstItem) {
            listProductBestSeller.push(firstItem);
            setShowProduct(listProductBestSeller[0]);
        }
    }
    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="flex flex-row max-lg:flex-col-reverse  p-5 max-lg:gap-5 gap-[10%] h-[80vh] max-lg:h-auto ">
                {/* <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 p-5 scrollbar-hide">
                    {   
                        listProductBestSeller.map((product, index) => (
                        <div key={index} className="snap-center flex-shrink-0">
                            <ProductItem product={product} />
                        </div>
                    ))}
                </div> */}
                <button className="absolute" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Overviews;