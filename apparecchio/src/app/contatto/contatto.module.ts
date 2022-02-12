import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContattoPageRoutingModule } from './contatto-routing.module';

import { ContattoPage } from './contatto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContattoPageRoutingModule
  ],
  declarations: [ContattoPage]
})
export class ContattoPageModule {}
