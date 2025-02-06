import { ProductItem } from "@core/interface";
import imgMain from './img/main.jpg';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';

export const Monka3075 : ProductItem = {
    id: Math.random(),
    mainImage: imgMain,
    images: [img1, img2, img3],
    name: 'Monka 3075 Pro V2 - RGB',
    price: 1300000,
    currencyUnit: "đ",
    originalPrice: 1400000,
    colors: ["Trắng", "Đen"],
    layout: "75%",
    switchType: ["KTT Hyacinth", "Sea Salt", "Cherry Powder"],
    rate: 4,
    userRate: 14,
    des: "Monka 3075 Pro V2 là bàn phím cơ 75% keycap PBT hỗ trợ hot-swap đèn RGB tùy chỉnh kết nối linh hoạt mang lại trải nghiệm gõ mượt mà.",
}
