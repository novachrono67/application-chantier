import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWorksitePageRoutingModule } from './add-worksite-routing.module';

import { AddWorksitePage } from './add-worksite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWorksitePageRoutingModule
  ],
  declarations: [AddWorksitePage]
})
export class AddWorksitePageModule {}
