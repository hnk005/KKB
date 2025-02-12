import { PRODUCT } from '@core/interface';
import { MONKA_3075_PRO_V2 } from './product/Monka3075ProV2';
function compareArrays(arr1, arr2) {
  // Kiểm tra nếu cả 2 mảng có cùng độ dài
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Kiểm tra từng đối tượng trong mảng
  for (let i = 0; i < arr1.length; i++) {
    const item1 = arr1[i];
    const item2 = arr2[i];

    // Kiểm tra key và value có giống nhau không
    if (item1.key !== item2.key || item1.value !== item2.value) {
      return false;
    }
  }

  return true;
}


const listProduct: PRODUCT[] = [MONKA_3075_PRO_V2]

export default listProduct;










