import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomechatPageRoutingModule } from './homechat-routing.module';

import { HomechatPage } from './homechat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomechatPageRoutingModule
  ],
  declarations: [HomechatPage]
})
export class HomechatPageModule {}
