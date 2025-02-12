import {PRODUCT, VARIANTS } from "@/core/interface";
import imgMain1 from "@assets/images/product/Monka 3075 Pro V2/main1.png";
import imgMain2 from "@assets/images/product/Monka 3075 Pro V2/main2.png";
import { v4 as uuidv4 } from 'uuid';

const INFO = {
    "Tên sản phẩm": "MONKA 3075 Pro V2",
    "Layout phím": "75%",
    "Hotswap": "Có hỗ trợ, hotswap 5 pin",
    "Loại switch": "Sea Salt / Cherry Powder",
    "Pin": "4000 mAh",
    "Hiệu ứng led": "Led RGB hơn 20 hiệu ứng, mạch xuôi",
    "Loại kết nối": "Bluetooth, Wireless 2.4G, USB Type C",
    "Keycap": "Cherry PBT doubleshot",
    "Hỗ trợ hệ điều hành": "iOS, Windows, Android",
    "Chiều dài cáp": "1,5m",
    "Đã được lót foam": "foam silicon + poron + pet",
    "Kích thước sản phẩm": "337 * 137 * 43mm"
};

const MONKA_3075_PRO_V2_WHITE_SS: VARIANTS = {
    id: uuidv4(),
    SKU: "1001",
    option: [
        {
            key: "Màu",
            value: "Trắng"
        },
        {
            key: "Switch",
            value: "Sea Salt"
        }
        
    ],
    image: imgMain1,
    rate: 4,
    quantityRate: 12,
    bestSeller: true,
    price: 1350000,
    originalPrice: 1400000,
    status: true,//còn hàng
    originalUnit: "đ",
    quantity: 50,
}

const MONKA_3075_PRO_V2_WHITE_CP: VARIANTS = {
    id: uuidv4(),
    SKU: "1002",
    option: [
        {
            key: "Màu",
            value: "Trắng"
        },
        {
            key: "Switch",
            value: "Cherry Powder"
        }
        
    ],
    image: imgMain1,
    rate: 3,
    quantityRate: 10,
    bestSeller: false,
    price: 1250000,
    originalPrice: 1350000,
    status: true,//còn hàng
    originalUnit: "đ",
    quantity: 80,
}

const MONKA_3075_PRO_V2_BLACK_SS: VARIANTS = {
    id: uuidv4(),
    SKU: "1003",
    option: [
        {
            key: "Màu",
            value: "Đen"
        },
        {
            key: "Switch",
            value: "Sea Salt"
        }
        
    ],
    image: imgMain2,
    rate: 4.5,
    quantityRate: 20,
    bestSeller: true,
    price: 1250000,
    originalPrice: 1350000,
    status: true,//còn hàng
    originalUnit: "đ",
    quantity: 80,
}

const MONKA_3075_PRO_V2_BLACK_CP: VARIANTS = {
    id: uuidv4(),
    SKU: "1004",
    option: [
        {
            key: "Màu",
            value: "Đen"
        },
        {
            key: "Switch",
            value: "Cherry Powder"
        }
        
    ],
    image: imgMain2,
    rate: 3.5,
    quantityRate: 14,
    bestSeller: false,
    price: 1250000,
    originalPrice: 1350000,
    status: true,//còn hàng
    originalUnit: "đ",
    quantity: 90,
}

export const MONKA_3075_PRO_V2:PRODUCT = {
    id: uuidv4(),
    name: "Monka 3075 Pro V2 - RGB",
    brand: "Monka",
    variants: [
        MONKA_3075_PRO_V2_WHITE_SS,
        MONKA_3075_PRO_V2_WHITE_CP,
        MONKA_3075_PRO_V2_BLACK_SS,
        MONKA_3075_PRO_V2_BLACK_CP
    ],
    info: INFO,
}

