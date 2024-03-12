import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PmfPushPageRoutingModule } from './pmf-push-routing.module';

import { PmfPushPage } from './pmf-push.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PmfPushPageRoutingModule,
  ],
  declarations: [PmfPushPage]
})
export class PmfPushPageModule {}
