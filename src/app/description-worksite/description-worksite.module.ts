import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionWorksitePageRoutingModule } from './description-worksite-routing.module';

import { DescriptionWorksitePage } from './description-worksite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionWorksitePageRoutingModule
  ],
  declarations: [DescriptionWorksitePage]
})
export class DescriptionWorksitePageModule {}
