import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomechatPage } from './homechat.page';

const routes: Routes = [
  {
    path: '',
    component: HomechatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomechatPageRoutingModule {}
