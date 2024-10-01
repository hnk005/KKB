export interface ProductItem {
    id: number;
    images: string[],
    name: string,
    price: number,
    originalPrice: number,
    colors: string[],
    layout: string,
    switchType: string[],
    rate: number,
    userRate: number,
}

export interface NotificationItem {
    image: string,
    title: string,
    des: string,
}