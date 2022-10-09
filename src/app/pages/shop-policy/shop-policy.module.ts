import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopPolicyPageRoutingModule } from './shop-policy-routing.module';

import { ShopPolicyPage } from './shop-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopPolicyPageRoutingModule
  ],
  declarations: [ShopPolicyPage]
})
export class ShopPolicyPageModule {}
