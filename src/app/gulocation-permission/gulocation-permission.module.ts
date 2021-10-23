import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GULocationPermissionPageRoutingModule } from './gulocation-permission-routing.module';

import { GULocationPermissionPage } from './gulocation-permission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GULocationPermissionPageRoutingModule
  ],
  declarations: [GULocationPermissionPage]
})
export class GULocationPermissionPageModule {}
