import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionWorksitePage } from './description-worksite.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionWorksitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionWorksitePageRoutingModule {}
