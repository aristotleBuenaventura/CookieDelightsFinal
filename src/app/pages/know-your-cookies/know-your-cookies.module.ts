import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnowYourCookiesPageRoutingModule } from './know-your-cookies-routing.module';

import { KnowYourCookiesPage } from './know-your-cookies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnowYourCookiesPageRoutingModule
  ],
  declarations: [KnowYourCookiesPage]
})
export class KnowYourCookiesPageModule {}
