const mathDiscount = (originalPrice: number, salePrice: number) => {
    return (((originalPrice - salePrice) / originalPrice) * 100).toFixed(1);
}

export default mathDiscount;