import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from '../shared/loader/loader.component';

import { InsalatonePage } from './insalatone.page';

const routes: Routes = [
  {
    path: '',
    component: InsalatonePage
  },
  {
    path: 'dettaglioinsalatone',
    loadChildren: () => import('./dettaglioinsalatone/dettaglioinsalatone.module').then( m => m.DettaglioinsalatonePageModule)
  }
];

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, LoaderComponent],
})
export class InsalatonePageRoutingModule {}
