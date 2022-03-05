import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrivimiPageRoutingModule } from './scrivimi-routing.module';

import { ScrivimiPage } from './scrivimi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrivimiPageRoutingModule
  ],
  declarations: [ScrivimiPage]
})
export class ScrivimiPageModule {}
