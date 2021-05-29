import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {


  title:string = 'Title';
  page:any;
  constructor(private storage:LocalStorageService) { 
   this.page = this.storage.chapters[this.storage.bookPage];
   this.title = this.page.title;
  }

  ngOnInit() {
    
  }

  next(){
    this.storage.bookPage += 1;
    this.page = this.storage.chapters[this.storage.bookPage];
    this.title = this.page.title;
  }

  prev(){
    this.storage.bookPage -= 1;
    this.page = this.storage.chapters[this.storage.bookPage];
    this.title = this.page.title;
  }
}
