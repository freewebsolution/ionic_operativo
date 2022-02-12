import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pizze',
    loadChildren: () => import('./pizze/pizze.module').then( m => m.PizzePageModule)
  },
  {
    path: 'preferiti',
    loadChildren: () => import('./preferiti/preferiti.module').then( m => m.PreferitiPageModule)
  },
  {
    path: 'commento',
    loadChildren: () => import('./commento/commento.module').then( m => m.CommentoPageModule)
  },
  {
    path: 'contatto',
    loadChildren: () => import('./contatto/contatto.module').then( m => m.ContattoPageModule)
  },
  {
    path: 'insalatone',
    loadChildren: () => import('./insalatone/insalatone.module').then( m => m.InsalatonePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
