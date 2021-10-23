import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GunotificationPermissionPage } from './gunotification-permission.page';

const routes: Routes = [
  {
    path: '',
    component: GunotificationPermissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GunotificationPermissionPageRoutingModule {}
