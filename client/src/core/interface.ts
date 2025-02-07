export interface ProductItem {
    id: number;
    name: string,
    brand: string,
    images: string[],
    rate: number | 0,
    quantityRate: number | 0,
    bestSeller: boolean,
    detail_Id: number,
    variants_Id: number[],
}

export interface Variants {
    id: number,
    SKU: string,
    color: string, 
    switchType: string, 
    price: number,
    status: boolean,
    originalPrice?: number,
    originalUnit: string,
    quantity: number,
}

export interface ProductItemDetails {
    id: number,
    layout: string,
    hotswap: boolean,
    pinSupport?: number,
    switchType?: string[],
    pin?: number,
    pinUnit?: string,
    led: boolean,
    ledEffect?: string,
    circuit: string,
    connect: string[],
    keycap: string,
    platformSupport: string[],
    cableLen: number,
    cableUnit: string,
    size: number[],
    sizeUnit: string,
    foam: boolean,
    foamMaterial: string[],
}

export interface NotificationItem {
    image: string,
    title: string,
    des: string,
}