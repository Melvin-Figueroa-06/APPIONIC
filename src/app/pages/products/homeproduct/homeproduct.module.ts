import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeproductPageRoutingModule } from './homeproduct-routing.module';

import { HomeproductPage } from './homeproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeproductPageRoutingModule
  ],
  declarations: [HomeproductPage]
})
export class HomeproductPageModule {}
