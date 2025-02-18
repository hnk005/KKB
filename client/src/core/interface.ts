export interface ProductInterface {
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

export interface UserInterface {
    name: string,
    avatar?: string,
    logout: () => void,
}


export interface NotificationItem {
    image: string,
    title: string,
    des: string,
}