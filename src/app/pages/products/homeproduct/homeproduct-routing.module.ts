import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeproductPage } from './homeproduct.page';

const routes: Routes = [
  {
    path: '',
    component: HomeproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeproductPageRoutingModule {}
