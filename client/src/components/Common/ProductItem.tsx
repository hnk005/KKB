import { memo } from "react"
import { Product } from "@/core/interface"
import { roundNumber } from "@/utils/roundNumber"
import StarRating from "./StarRating"

interface ProductItemProps {
    item: Product, 
}

const ProductItem : React.FC<ProductItemProps> = ({ item}) => {
    return (
        <div className={`flex-none p-4 rounded-lg shadow-lg hover:bg-green-950 animate-fade-in`}>
            <div className="flex flex-col w-full h-full justify-between items-center gap-20">
                <img src={item.image} alt={item.name} className="w-[70%] h-24 object-cover mb-4 rounded-lg" />
                <div className="flex flex-col justify-around items-center gap-4">
                    <h3 className="text-2xl text-center font-semibold w-[80%] line-clamp-1 cursor-help" title= {item.name} >{item.name}</h3>
                    <div className="flex justify-center gap-5">
                        <StarRating rate={item.rate} />
                        <span className="flex gap-2 text-gray-400">
                            {item.quantityRate}
                            <span>
                                Đánh giá
                            </span>
                        </span>
                    </div>
                </div>
                <div className="flex gap-3">

                    <span className="text-2xl font-semibold">
                        {item.price.originalPrice.toLocaleString()}
                        <span>
                            {item.price.unit}
                        </span>
                    </span>
                    {item.price.discountedPrice && <del className="text-xl font-semibold text-gray-500">
                        {item.price.discountedPrice.toLocaleString()}
                        <span>
                            {item.price.unit}
                        </span>
                    </del>}
                    {item.price.discountedPrice && <div className="block px-2 py-1 bg-red-600 rounded-sm font-normal">
                        <span>
                            - {roundNumber(100 - item.price.discountedPrice / item.price.originalPrice * 100)}%
                        </span>
                    </div>}
                </div>
                <button className="flex flex-row bg-green-500 p-2 rounded-md gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    )
}

export default memo(ProductItem);