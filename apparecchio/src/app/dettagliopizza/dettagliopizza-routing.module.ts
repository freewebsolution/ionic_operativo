import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliopizzaPage } from './dettagliopizza.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliopizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliopizzaPageRoutingModule {}
