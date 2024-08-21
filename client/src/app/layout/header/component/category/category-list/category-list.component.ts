import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';


interface Category {
  label: string,
  icon: string,
  item: CategoryListItem[],
  command: (item: Category) => void;
}

interface CategoryListItem {
  label: string,
  item: string[],
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnDestroy{
  static header : string = 'Danh mục';
  static position : string = 'top-left';

  item1 = ['Bàn Phím Cơ','Bàn Phím Membrane', 'Bàn Phím Gaming', 'Bàn Phím Văn Phòng','Bàn Phím Mini'];
  item2 = ['Cherry MX', 'Razer', 'Kailh', 'Gateron'];


  itemSelect! : Category;

  showItemSelect = false;

  items : Category[] = [
    { 
      label: 'Bàn phím mới', 
      icon: 'keyboard',
      item: [
        {
          label: 'Loại Bàn Phím',
          item: this.item1,
        },
        {
          label: 'Loại Switch',
          item: this.item2,
        }
      ],
      command: (item) => {
        this.itemSelect= item;
      },
    },
    { 
      label: 'Bàn phím cũ',  
      icon: 'keyboard_alt',
      item: [
        {
          label: 'Loại Bàn Phím',
          item: this.item1,
        },
        {
          label: 'Loại Switch',
          item: this.item2,
        }
      ],
      command: (item) => {
        this.itemSelect= item;
      },
    },
    { 
      label: 'Dụng cụ',  
      icon: 'construction',
      item: [
        {
          label: 'Loại Bàn Phím',
          item: this.item1,
        },
        {
          label: 'Loại Switch',
          item: this.item2,
        }
      ],
      command: (item) => {
        this.itemSelect= item;
      },
    },
    { 
      label: 'Phụ kiện',  
      icon: 'power',
      item: [
        {
          label: 'Loại Bàn Phím',
          item: this.item1,
        },
        {
          label: 'Loại Switch',
          item: this.item2,
        }
      ],
      command: (item) => {
        this.itemSelect= item;
      },
    },
  ];

  constructor(private elementRef: ElementRef) {}
  
  show = false;

  @Output() showComponent = new EventEmitter<boolean>();

  @HostListener('document:click', ['$event'])
  clickout(event : Event) {
    if (!this.show) {
      this.show = true;
    } else if(!this.elementRef.nativeElement.contains(event.target)) {
      this.showComponent.emit(false);
    }
  };

  @HostListener('document:mouseover', ['$event'])
  moveOut(event: Event) {
    if(!this.elementRef.nativeElement.contains(event.target)) { 
      this.showItemSelect = false;
    } else {
      this.showItemSelect = true;
    }
  };

  ngOnDestroy(): void {
    console.log('close')
  }
}
