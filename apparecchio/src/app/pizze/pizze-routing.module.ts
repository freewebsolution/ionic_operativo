import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from '../shared/loader/loader.component';

import { PizzePage } from './pizze.page';

const routes: Routes = [
  {
    path: '',
    component: PizzePage
  },
  {
    path: 'dettagliopizza',
    loadChildren: () => import('./dettagliopizza/dettagliopizza.module').then(m => m.DettagliopizzaPageModule)
  }
];

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,LoaderComponent],
})
export class PizzePageRoutingModule { }
