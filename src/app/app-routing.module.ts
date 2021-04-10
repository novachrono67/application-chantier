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
    path: 'description-worksite',
    loadChildren: () => import('./description-worksite/description-worksite.module').then( m => m.DescriptionWorksitePageModule)
  },
  {
    path: 'add-worksite',
    loadChildren: () => import('./add-worksite/add-worksite.module').then( m => m.AddWorksitePageModule)
  },
  {
    path: 'list-worksite',
    loadChildren: () => import('./list-worksite/list-worksite.module').then( m => m.ListWorksitePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
