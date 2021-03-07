import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Library', url: '/library', icon: 'book' },
    { title: 'Book Shelf', url: '/shelf', icon: 'layers' },
    { title: 'My Books', url: '/my-book', icon: 'archive' },
    { title: 'Letters', url: '/letters', icon: 'document' },
    { title: 'Diary', url: '/folder/Trash', icon: 'reader' },
    { title: 'Leave', url: '/folder/Spam', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
