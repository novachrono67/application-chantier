import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListWorksitePageRoutingModule } from './list-worksite-routing.module';

import { ListWorksitePage } from './list-worksite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListWorksitePageRoutingModule
  ],
  declarations: [ListWorksitePage]
})
export class ListWorksitePageModule {}
