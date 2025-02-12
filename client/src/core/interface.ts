export interface PRODUCT {
    id: string;
    name: string,
    brand: string,
    variants: VARIANTS [],
    info: any,
}

export interface VARIANTS {
    id: string,
    price: number,
    SKU: string,
    image: string,
    status: boolean,
    rate: number | 0,
    quantityRate: number | 0,
    option?: {key: string, value: string}[]
    bestSeller: boolean,
    originalPrice?: number,
    originalUnit: string,
    quantity: number,
}

export interface PRODUCT_ITEM {
    id: string;
    name: string,
    brand: string,
    price: number,
    SKU: string,
    image: string,
    status: boolean,
    rate: number | 0,
    quantityRate: number | 0,
    option?: {key: string, value: string}[]
    originalPrice?: number,
    originalUnit: string,
    quantity: number,
    info: any,
}

export interface NotificationItem {
    image: string,
    title: string,
    des: string,
}