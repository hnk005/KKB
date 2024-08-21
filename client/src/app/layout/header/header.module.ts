import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './component/category/category.component';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './header.component';
import { CartComponent } from './component/cart/cart.component';
import { BellComponent } from './component/bell/bell.component';
import { SearchbarModule } from './component/searchbar/searchbar.module';
import { UserComponent } from './component/user/user.component';
import { DialogModule } from 'primeng/dialog';
import { CategoryListComponent } from './component/category/category-list/category-list.component';
import { TitleComponent } from './component/title/title.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CartComponent,
    BellComponent,
    UserComponent,
    CategoryComponent,
    CategoryListComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    SearchbarModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
