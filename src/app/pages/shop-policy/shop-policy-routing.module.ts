import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopPolicyPage } from './shop-policy.page';

const routes: Routes = [
  {
    path: '',
    component: ShopPolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopPolicyPageRoutingModule {}
