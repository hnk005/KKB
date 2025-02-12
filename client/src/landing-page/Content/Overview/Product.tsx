import StarRating from "@components/common/StarRating"
import { PRODUCT_ITEM } from "@core/interface"
import { ReactElement } from "react"

const ProductItem = ({ product }: { product: PRODUCT_ITEM }): ReactElement => {
    return (
        <>
            <div className="flex flex-col flex-1 relative justify-center">
                <div className="flex flex-col gap-6">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold tracking-wide">
                        {product.name}
                    </h1>
                    {
                        product.option?.map((o) =>
                            <span className="flex gap-2 items-center">
                                <span>{o.key}:</span>
                                <span className="text-black bg-white rounded-xl p-1">{o.value}</span>
                            </span>
                        )}
                    <div className="flex flex-row items-center gap-4 select-none">
                        <span className="flex flex-row items-center">
                            <StarRating rate={product.rate} />
                            <span className="ms-1 text-xl font-normal text-gray-400 ">{product.rate}</span>
                        </span>
                        <span className="flex flex-row items-center text-sm max-lg:text-xs gap-3">
                            {product.quantityRate}
                            <span>Đánh giá</span>
                        </span>
                    </div>
                    <div>
                    </div>
                    <div className="flex flex-row gap-2 font-bold">
                        <span className="flex flex-row text-2xl max-md:text-lg">
                            {product.price.toLocaleString()}
                            {product.originalUnit}
                        </span>
                        <del className="flex flex-row text-lg max-md:text-sm text-gray-400">
                            {product.originalPrice?.toLocaleString()}
                            {product.originalPrice && product.originalUnit}
                        </del>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 lg:bottom-10 lg:right-auto">
                    <button className="flex p-2 bg-blue-400 rounded-md hover:opacity-80">
                        <span className="flex w-full bg-blue-500 rounded-md items-center p-1 justify-between gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 max-md:size-4 max-sm:size-6">
                                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                            </svg>
                            <span className="text-sm max-lg:text-sm max-sm:hidden select-none">
                                Thêm vào giỏ hàng
                            </span>
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex flex-[1.8] select-none justify-center items-center">
                <img className="rounded-md p-2 min-w-[230px] object-cover" src={product.image}></img>
            </div>
        </>
    )
}

export default ProductItem;