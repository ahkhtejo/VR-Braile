import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnBraillePageRoutingModule } from './learn-braille-routing.module';

import { LearnBraillePage } from './learn-braille.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnBraillePageRoutingModule
  ],
  declarations: [LearnBraillePage]
})
export class LearnBraillePageModule {}
