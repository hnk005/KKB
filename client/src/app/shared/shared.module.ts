import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconBellComponent } from './app-icon/icon-bell/icon-bell.component';
import { IconSearchComponent } from './app-icon/icon-search/icon-search.component';
import { ButtonComponent } from './app-button/button/button.component';
import { ButtonModule } from 'primeng/button';
import { IconCartComponent } from './app-icon/icon-cart/icon-cart.component';
import { IconUserComponent } from './app-icon/icon-user/icon-user.component';
import { DialogDyamicComponent } from './app-dialog/dialog-dyamic/dialog-dyamic.component';
import { DialogService } from 'primeng/dynamicdialog';
import { MenuComponent } from './app-menu/menu/menu.component';
import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [
    ButtonComponent,
    IconBellComponent,
    IconSearchComponent,
    IconCartComponent,
    IconUserComponent,
    DialogDyamicComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenuModule,
  ],
  providers: [
    DialogService
  ],
  exports: [
    ButtonComponent,
    IconBellComponent,
    IconCartComponent,
    IconSearchComponent,
    IconUserComponent,
    DialogDyamicComponent,
    MenuComponent,
  ]
})
export class SharedModule { }
