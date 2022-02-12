import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentoPageRoutingModule } from './commento-routing.module';

import { CommentoPage } from './commento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentoPageRoutingModule
  ],
  declarations: [CommentoPage]
})
export class CommentoPageModule {}
