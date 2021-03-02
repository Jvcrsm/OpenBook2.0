import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Library', url: '/library', icon: 'book' },
    { title: 'Followed', url: '/Outbox', icon: 'paper-plane' },
    { title: 'Book Shelf', url: '/folder/Favorites', icon: 'heart' },
    { title: 'My Books', url: '/folder/Archived', icon: 'archive' },
    { title: 'Letters', url: '/folder/Trash', icon: 'trash' },
    { title: 'Diary', url: '/folder/Trash', icon: 'trash' },
    { title: 'Leave', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
