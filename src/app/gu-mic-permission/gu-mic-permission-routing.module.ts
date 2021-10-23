import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuMICPermissionPage } from './gu-mic-permission.page';

const routes: Routes = [
  {
    path: '',
    component: GuMICPermissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuMICPermissionPageRoutingModule {}
