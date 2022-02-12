import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentoPage } from './commento.page';

const routes: Routes = [
  {
    path: '',
    component: CommentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentoPageRoutingModule {}
