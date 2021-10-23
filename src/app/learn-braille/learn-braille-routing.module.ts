import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnBraillePage } from './learn-braille.page';

const routes: Routes = [
  {
    path: '',
    component: LearnBraillePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnBraillePageRoutingModule {}
