import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CategoryService } from '../category.service';
import Category from '../../../../../core/interfaces/category.interface';

// items : Category[] = [
//   { 
//     label: 'Bàn phím mới', 
//     icon: 'keyboard',
//     item: [
//       {
//         label: 'Loại Bàn Phím',
//         item: ,
//       },
//       {
//         label: 'Loại Switch',
//         item: this.item2,
//       }
//     ],
//     command: (item) => {
//       this.itemSelect= item;
//     },
//   },
//   { 
//     label: 'Bàn phím cũ',  
//     icon: 'keyboard_alt',
//     item: [
//       {
//         label: 'Loại Bàn Phím',
//         item: this.item1,
//       },
//       {
//         label: 'Loại Switch',
//         item: this.item2,
//       }
//     ],
//     command: (item) => {
//       this.itemSelect= item;
//     },
//   },
//   { 
//     label: 'Dụng cụ',  
//     icon: 'construction',
//     item: [
//       {
//         label: 'Loại Bàn Phím',
//         item: this.item1,
//       },
//       {
//         label: 'Loại Switch',
//         item: this.item2,
//       }
//     ],
//     command: (item) => {
//       this.itemSelect= item;
//     },
//   },
//   { 
//     label: 'Phụ kiện',  
//     icon: 'power',
//     item: [
//       {
//         label: 'Loại Bàn Phím',
//         item: this.item1,
//       },
//       {
//         label: 'Loại Switch',
//         item: this.item2,
//       }
//     ],
//     command: (item) => {
//       this.itemSelect= item;
//     },
//   },
// ];

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnDestroy{

  items! : Category[];
  

  constructor(private elementRef: ElementRef, private cService: CategoryService) {
    this.items = this.cService.category;
  }

  show(item : Category) {
    this.cService.showCategory(item);
  }

  ngOnDestroy(): void {
    console.log('close')
  }
}
