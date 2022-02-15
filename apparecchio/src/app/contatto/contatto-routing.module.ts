import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from '../shared/loader/loader.component';

import { ContattoPage } from './contatto.page';

const routes: Routes = [
  {
    path: '',
    component: ContattoPage
  }
];

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, LoaderComponent],
})
export class ContattoPageRoutingModule { }
