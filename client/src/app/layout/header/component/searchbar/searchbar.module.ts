import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SearchbarComponent } from './searchbar.component';

@NgModule({
  declarations: [
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
  ],
  exports: [
    SearchbarComponent
  ]
})
export class SearchbarModule { }
