import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
          path: '',
          component: HomePagesComponent,
      },
      {
          path: 'cart',
          loadChildren: () => import('./pages/cart-pages/cart-pages.module').then(m => m.CartPagesModule)
      },
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
