import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzePage } from './pizze.page';

const routes: Routes = [
  {
    path: '',
    component: PizzePage
  },
  {
    path: 'dettagliopizza',
    loadChildren: () => import('./dettagliopizza/dettagliopizza.module').then( m => m.DettagliopizzaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzePageRoutingModule {}
