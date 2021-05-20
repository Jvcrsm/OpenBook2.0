import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Library', url: '/library', icon: 'book' },
    { title: 'My Books', url: '/my-book', icon: 'archive' },
    { title: 'Letters', url: '/letters', icon: 'document' },
    { title: 'Diary', url: '/diary', icon: 'reader' },
    { title: 'Leave', url: '/login', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
