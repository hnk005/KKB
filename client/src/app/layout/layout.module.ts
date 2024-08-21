import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HeaderModule } from './header/header.module';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderModule,
    MenubarModule,
  ],
  providers: [],
})
export class LayoutModule { }
