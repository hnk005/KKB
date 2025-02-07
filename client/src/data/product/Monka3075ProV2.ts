import { ProductItem, ProductItemDetails, Variants } from "@/core/interface";
import imgMain1 from "@assets/images/product/Monka 3075 Pro V2/main1.png";
import imgMain2 from "@assets/images/product/Monka 3075 Pro V2/main2.png";
import img1 from "@assets/images/product/Monka 3075 Pro V2/1.jpg";
import img2 from "@assets/images/product/Monka 3075 Pro V2/2.jpg";
import img3 from "@assets/images/product/Monka 3075 Pro V2/3.jpg";

const MONKA_3075_PRO_V2_DETAIL: ProductItemDetails = {
    id: Math.random(),
    layout: "75%",
    hotswap: true,
    pinSupport: 5,
    switchType: ["KTT Hyacinth", "Sea Salt", "Cherry Powder"],
    pin: 4000,
    pinUnit: "mAh",
    led: true,
    ledEffect: "Led RGB hơn 20 hiệu ứng",
    circuit: "Mạch xuôi",
    connect: ["Bluetooth", "Wireless 2.4G", "USB Type C"],
    keycap: "Cherry PBT doubleshot",
    platformSupport: ["iOS", "Windows", "Android"],
    cableLen: 15,
    cableUnit: "m",
    size: [337, 137, 43],
    sizeUnit: "mm",
    foam: true,
    foamMaterial: ["silicon", "poron", "pet"],
}

const MONKA_3075_PRO_V2_WHITE_KH: Variants = {
    id: Math.random(),
    SKU: "M-3075-PRO-V2-W-KH",
    color: "Trắng",
    switchType: "KTT Hyacinth",
    price: 1350000,
    originalPrice: 1400000,
    status: true,//còn hàng
    originalUnit: "đ",
    quantity: 100,
}

const MONKA_3075_PRO_V2_WHITE_SS: Variants = {
    id: Math.random(),
    SKU: "M-3075-PRO-V2-W-SS",
    color: "Trắng",
    switchType: "Sea Salt",
    price: 1250000,
    originalPrice: 1350000,
    status: true,//còn hàng
    originalUnit: "đ",
    quantity: 50,
}

const MONKA_3075_PRO_V2_WHITE_CP: Variants = {
    id: Math.random(),
    SKU: "M-3075-PRO-V2-W-KH",
    color: "Trắng",
    switchType: "Cherry Powder",
    price: 1250000,
    originalPrice: 1350000,
    status: true,//còn hàng
    originalUnit: "đ",
    quantity: 80,
}

const MONKA_3075_PRO_V2_BLACK_KH: Variants = {
    id: Math.random(),
    SKU: "M-3075-PRO-V2-B-KH",
    color: "Black",
    switchType: "KTT Hyacinth",
    price: 1350000,
    originalPrice: 1400000,
    status: true,//còn hàng
    originalUnit: "đ",
    quantity: 100,
}

const MONKA_3075_PRO_V2_BLACK_SS: Variants = {
    id: Math.random(),
    SKU: "M-3075-PRO-V2-B-SS",
    color: "Black",
    switchType: "Sea Salt",
    price: 1250000,
    originalPrice: 1350000,
    status: true,//còn hàng
    originalUnit: "đ",
    quantity: 80,
}

const MONKA_3075_PRO_V2_BLACK_CP: Variants = {
    id: Math.random(),
    SKU: "M-3075-PRO-V2-B-CP",
    color: "Black",
    switchType: "Cherry Powder",
    price: 1250000,
    originalPrice: 1350000,
    status: true,//còn hàng
    originalUnit: "đ",
    quantity: 90,
}

export const MONKA_3075_PRO_V2: ProductItem = {
    id: Math.random(),
    name: "Monka 3075 Pro V2 - RGB",
    brand: "Monka",
    bestSeller: true,
    images: [img1, img2, img3, imgMain1, imgMain2],
    rate: 4,
    quantityRate: 14,
    detail_Id: MONKA_3075_PRO_V2_DETAIL.id,
    variants_Id: [
        MONKA_3075_PRO_V2_WHITE_KH.id,
        MONKA_3075_PRO_V2_WHITE_SS.id,
        MONKA_3075_PRO_V2_WHITE_CP.id,
        MONKA_3075_PRO_V2_BLACK_KH.id,
        MONKA_3075_PRO_V2_BLACK_SS.id,
        MONKA_3075_PRO_V2_BLACK_CP.id
    ],
}

