import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddWorksitePage } from './add-worksite.page';

const routes: Routes = [
  {
    path: '',
    component: AddWorksitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddWorksitePageRoutingModule {}
