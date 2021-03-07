import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageContentPageRoutingModule } from './page-content-routing.module';

import { PageContentPage } from './page-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageContentPageRoutingModule
  ],
  declarations: [PageContentPage]
})
export class PageContentPageModule {}
