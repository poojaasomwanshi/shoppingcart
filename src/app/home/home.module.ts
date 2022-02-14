import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import { ProductModule } from '../product/product.module';




@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,ProductModule
  ],
  exports:[HomePage]
})
export class HomeModule { }
