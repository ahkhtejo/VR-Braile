import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GunotificationPermissionPageRoutingModule } from './gunotification-permission-routing.module';

import { GunotificationPermissionPage } from './gunotification-permission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GunotificationPermissionPageRoutingModule
  ],
  declarations: [GunotificationPermissionPage]
})
export class GunotificationPermissionPageModule {}
