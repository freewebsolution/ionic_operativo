import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrivimiPage } from './scrivimi.page';

const routes: Routes = [
  {
    path: '',
    component: ScrivimiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrivimiPageRoutingModule {}
