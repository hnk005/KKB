import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './header.component';
import { CartComponent } from './component/cart/cart.component';
import { BellComponent } from './component/bell/bell.component';
import { SearchbarModule } from './component/searchbar/searchbar.module';
import { UserComponent } from './component/user/user.component';
import { TitleComponent } from './component/title/title.component';
import { CategoryModule } from './component/category/category.module';

@NgModule({
  declarations: [
    HeaderComponent,
    CartComponent,
    BellComponent,
    UserComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    SearchbarModule,
    CategoryModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
