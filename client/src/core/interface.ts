export interface ProductItem {
    id: number;
    mainImage: string,
    images: string[],
    name: string,
    price: number,
    currencyUnit: string,
    originalPrice?: number,
    colors?: string[],
    layout?: string,
    switchType: string[],
    rate: number | 0,
    userRate: number | 0,
    des?: string,
}

export interface NotificationItem {
    image: string,
    title: string,
    des: string,
}