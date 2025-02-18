import { ProductInterface } from "@/core/interface";
import image1 from "@assets/images/product/Monka 3075 Pro V2/main.png";
import image2 from "@assets/images/product/Logitech Pop Keys/main.png";
import image3 from "@assets/images/product/Keychron K3 V2/main.png";
import image4 from "@assets/images/product/Akko 5108B Plus Demon Slayer – Kamado Nezuko/main.png";
import image5 from "@assets/images/product/E-Dra EK368L/main.png";
import image6 from "@assets/images/product/Razer DeathStalker V2 Pro Tenkeyless/main.png";

const listProduct: ProductInterface[] = [
  {
    id: 1,
    name: "Monka 3075 Pro V2",
    image: image1,
    price: {
      originalPrice: 1400000,
      discountedPrice: 1350000,
      unit: "đ",
    },
    bestSaller: true,
    rate: 4,
    quantityRate: 20,
  },
  {
    id: 2,
    name: "Logitech Pop Keys",
    image: image2,
    price: {
      originalPrice: 2499000,
      unit: "đ",
    },
    bestSaller: true,
    rate: 4.5,
    quantityRate: 10,
  },
  {
    id: 3,
    name: "Keychron K3 V2",
    image: image3,
    price: {
      originalPrice: 1890000,
      discountedPrice: 1790000,
      unit: "đ",
    },
    bestSaller: false,
    rate: 3,
    quantityRate: 21,
  },
  {
    id: 4,
    name: "Akko 5108B Plus Demon Slayer – Kamado Nezuko",
    image: image4,
    price: {
      originalPrice: 2999000,
      discountedPrice: 2790000,
      unit: "đ",
    },
    bestSaller: true,
    rate: 5,
    quantityRate: 12,
  },
  {
    id: 5,
    name: "E-Dra EK368L",
    image: image5,
    price: {
      originalPrice: 499000,
      discountedPrice: 449000,
      unit: "đ",
    },
    bestSaller: false,
    rate: 3,
    quantityRate: 2,
  },
  {
    id: 6,
    name: "Razer DeathStalker V2 Pro Tenkeyless",
    image: image6,
    price: {
      originalPrice: 4190000,
      discountedPrice: 4149000,
      unit: "đ",
    },
    bestSaller: false,
    rate: 4,
    quantityRate: 5,
  },
]

export default listProduct;










