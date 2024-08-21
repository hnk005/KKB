import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPagesComponent } from './cart-pages.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CartPagesComponent }
];

@NgModule({
  declarations: [
    CartPagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class CartPagesModule { }
