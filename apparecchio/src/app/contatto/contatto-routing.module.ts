import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContattoPage } from './contatto.page';

const routes: Routes = [
  {
    path: '',
    component: ContattoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContattoPageRoutingModule {}
