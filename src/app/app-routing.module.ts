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
    path: 'gulocation-permission',
    loadChildren: () => import('./gulocation-permission/gulocation-permission.module').then( m => m.GULocationPermissionPageModule)
  },
  {
    path: 'gunotification-permission',
    loadChildren: () => import('./gunotification-permission/gunotification-permission.module').then( m => m.GunotificationPermissionPageModule)
  },
  {
    path: 'gu-mic-permission',
    loadChildren: () => import('./gu-mic-permission/gu-mic-permission.module').then( m => m.GuMICPermissionPageModule)
  },
  {
    path: 'greeting',
    loadChildren: () => import('./greeting/greeting.module').then( m => m.GreetingPageModule)
  },
  {
    path: 'ourservices',
    loadChildren: () => import('./ourservices/ourservices.module').then( m => m.OurservicesPageModule)
  },
  {
    path: 'learn-braille',
    loadChildren: () => import('./learn-braille/learn-braille.module').then( m => m.LearnBraillePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
