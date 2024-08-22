import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category.service';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { DirectiveModule } from '../../../../core/directive/directive.module';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    DirectiveModule,
  ],
  providers: [
    CategoryService,
  ],
  exports: [
    CategoryListComponent,
    CategoryComponent,
  ]
})
export class CategoryModule { }
