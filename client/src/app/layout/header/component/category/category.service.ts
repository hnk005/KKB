import { Injectable } from '@angular/core';
import Category from '../../../../core/interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  item1 = ['Bàn Phím Cơ','Bàn Phím Membrane', 'Bàn Phím Gaming', 'Bàn Phím Văn Phòng','Bàn Phím Mini'];
  item2 = ['Cherry MX', 'Razer', 'Kailh', 'Gateron'];

  public category : Category[] = [
    {
      visable: false,
      label: "Bàn phím mới",
      icon: "keyboard",
      href: '',
      subCategory: [
        {
          title: 'Loại bàn phím',
          item: this.item1.map((value) => ({label: value, href:''}))
        },
        {
          title: 'Loại switch',
          item: this.item2.map((value) => ({label: value, href:''}))
        },
      ]
    }
  ]

  showCategory(item: Category) {
    item.visable = !item.visable;
  }

  constructor() { }
}
