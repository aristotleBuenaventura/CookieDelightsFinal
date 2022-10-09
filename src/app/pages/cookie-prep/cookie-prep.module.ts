import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookiePrepPageRoutingModule } from './cookie-prep-routing.module';

import { CookiePrepPage } from './cookie-prep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookiePrepPageRoutingModule
  ],
  declarations: [CookiePrepPage]
})
export class CookiePrepPageModule {}
