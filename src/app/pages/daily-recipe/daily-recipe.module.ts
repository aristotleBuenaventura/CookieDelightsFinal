import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyRecipePageRoutingModule } from './daily-recipe-routing.module';

import { DailyRecipePage } from './daily-recipe.page';
import { ProductsPage } from '../products/products.page';
import { CartModalPage } from '../cart-modal/cart-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyRecipePageRoutingModule
  ],
  declarations: [DailyRecipePage,CartModalPage,ProductsPage]
})
export class DailyRecipePageModule {}
