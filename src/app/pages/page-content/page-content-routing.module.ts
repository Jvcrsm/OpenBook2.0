import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageContentPage } from './page-content.page';

const routes: Routes = [
  {
    path: '',
    component: PageContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageContentPageRoutingModule {}
