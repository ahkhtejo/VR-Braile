import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuMICPermissionPageRoutingModule } from './gu-mic-permission-routing.module';

import { GuMICPermissionPage } from './gu-mic-permission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuMICPermissionPageRoutingModule
  ],
  declarations: [GuMICPermissionPage]
})
export class GuMICPermissionPageModule {}
