import StarRating from "@components/common/StarRating"
import { ProductItem } from "@core/interface"
import { ReactElement } from "react"

const Product = ({ product }: { product: ProductItem }): ReactElement => {
    console.log(product.des)
    return (
        <>
            <div className="flex flex-col flex-1 relative justify-center">
                <div className="flex flex-col gap-6">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold tracking-wide">
                        {product.name}
                    </h1>
                    <h3 className="text-sm  max-md:text-xs  text-gray-400">
                        {product.des}
                    </h3>
                    <div className="flex flex-row items-center gap-4 select-none">
                        <span className="flex flex-row">
                            <StarRating rate={product.rate} />
                        </span>
                        <span className="flex flex-row items-center text-sm max-lg:text-xs gap-3">
                            {product.userRate}
                            <span>Đánh giá</span>
                        </span>
                    </div>
                    <div>
                    </div>
                    <div className="flex flex-row gap-2 font-bold">
                        <span className="flex flex-row text-2xl max-md:text-lg">
                            {product.price.toLocaleString()}
                            {product.currencyUnit}
                        </span>
                        <del className="flex flex-row text-lg max-md:text-sm text-gray-400">
                            {product.originalPrice?.toLocaleString()}
                            {product.originalPrice && product.currencyUnit}
                        </del>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 lg:bottom-10 lg:right-auto">
                    <button className="flex p-2 bg-blue-400 rounded-md hover:opacity-80">
                        <span  className="flex w-full bg-blue-500 rounded-md items-center p-1 justify-between gap-2">
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
            <div className="flex flex-col flex-[1.8] select-none">
                <div className="flex p-5 justify-center min-w-[230px]">
                    <img className="rounded-md object-cover" src={product.mainImage}></img>
                </div>
                <div className="flex flex-row flex-nowrap min-w-[230px]">
                    {
                        product.images.map((image, index) =>
                            <div key={index} className="p-3 flex-1 max-sm:p-1">
                                <img className="rounded-md object-cover" src={image}></img>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Product;