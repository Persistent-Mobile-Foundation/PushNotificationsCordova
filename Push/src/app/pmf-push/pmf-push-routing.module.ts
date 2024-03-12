import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PmfPushPage } from './pmf-push.page';

const routes: Routes = [
  {
    path: '',
    component: PmfPushPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmfPushPageRoutingModule {}
