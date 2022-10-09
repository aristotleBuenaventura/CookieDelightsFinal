import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookiePrepPage } from './cookie-prep.page';

const routes: Routes = [
  {
    path: '',
    component: CookiePrepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookiePrepPageRoutingModule {}
