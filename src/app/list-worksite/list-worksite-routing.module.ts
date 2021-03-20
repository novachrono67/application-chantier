import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListWorksitePage } from './list-worksite.page';

const routes: Routes = [
  {
    path: '',
    component: ListWorksitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListWorksitePageRoutingModule {}
