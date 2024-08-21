import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersPagesComponent } from './pages/users-pages/users-pages.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'user',
        component: UsersPagesComponent,
      }
    ]
  }
];

