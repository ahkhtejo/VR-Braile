import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GULocationPermissionPage } from './gulocation-permission.page';

const routes: Routes = [
  {
    path: '',
    component: GULocationPermissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GULocationPermissionPageRoutingModule {}
