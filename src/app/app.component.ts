import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Library', url: '/library', icon: 'book' },
    { title: 'Followed', url: '/Outbox', icon: 'heart-circle' },
    { title: 'Book Shelf', url: '/folder/Favorites', icon: 'layers' },
    { title: 'My Books', url: '/folder/Archived', icon: 'archive' },
    { title: 'Letters', url: '/folder/Trash', icon: 'document' },
    { title: 'Diary', url: '/folder/Trash', icon: 'reader' },
    { title: 'Leave', url: '/folder/Spam', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
