import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'library',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./pages/library/library.module').then( m => m.LibraryPageModule)
  },  {
    path: 'read',
    loadChildren: () => import('./pages/read/read.module').then( m => m.ReadPageModule)
  },
  {
    path: 'page',
    loadChildren: () => import('./pages/page/page.module').then( m => m.PagePageModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./pages/community/community.module').then( m => m.CommunityPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'shelf',
    loadChildren: () => import('./pages/shelf/shelf.module').then( m => m.ShelfPageModule)
  },
  {
    path: 'my-book',
    loadChildren: () => import('./pages/my-book/my-book.module').then( m => m.MyBookPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./pages/summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'page-content',
    loadChildren: () => import('./pages/page-content/page-content.module').then( m => m.PageContentPageModule)
  },
  {
    path: 'letters',
    loadChildren: () => import('./pages/letters/letters.module').then( m => m.LettersPageModule)
  },
  {
    path: 'diary',
    loadChildren: () => import('./pages/diary/diary.module').then( m => m.DiaryPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
