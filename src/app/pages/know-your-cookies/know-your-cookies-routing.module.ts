import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnowYourCookiesPage } from './know-your-cookies.page';

const routes: Routes = [
  {
    path: '',
    component: KnowYourCookiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnowYourCookiesPageRoutingModule {}
