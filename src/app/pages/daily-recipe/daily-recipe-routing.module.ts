import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyRecipePage } from './daily-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: DailyRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyRecipePageRoutingModule {}
