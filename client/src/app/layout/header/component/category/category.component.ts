import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  show = false;

  classIcon : string = 'pi pi-sort-down-fill';

  setClassIcon() {
    return this.show ? 'pi pi-sort-up-fill': 'pi pi-sort-down-fill'
  }

  showComponent(shows: boolean) {
    this.show = shows;
    this.classIcon = this.setClassIcon();
  }
  
  showList() {
    this.show = !this.show;
    this.classIcon = this.setClassIcon();
  }
}
