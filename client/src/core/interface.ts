export interface Product {
    id: number,
    name: string,
    image: string,
    price: {
        originalPrice: number,
        discountedPrice?: number,
        unit: string,
    }
    rate: number,
    quantityRate: number,
    bestSaller: boolean,
}


export interface NotificationItem {
    image: string,
    title: string,
    des: string,
}