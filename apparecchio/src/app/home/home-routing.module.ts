import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from '../shared/loader/loader.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,LoaderComponent]
})
export class HomePageRoutingModule {}
