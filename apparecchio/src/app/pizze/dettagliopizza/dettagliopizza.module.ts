import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliopizzaPageRoutingModule } from './dettagliopizza-routing.module';

import { DettagliopizzaPage } from './dettagliopizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliopizzaPageRoutingModule
  ],
  declarations: [DettagliopizzaPage]
})
export class DettagliopizzaPageModule {}
