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
    path: 'default-modal',
    loadChildren: () => import('./modals/default-modal/default-modal.module').then( m => m.DefaultModalPageModule)
  },
  {
    path: 'pop-up',
    loadChildren: () => import('./modals/pop-up/pop-up.module').then( m => m.PopUpPageModule)
  },
  {
    path: 'bottom-drawer',
    loadChildren: () => import('./modals/bottom-drawer/bottom-drawer.module').then( m => m.BottomDrawerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
