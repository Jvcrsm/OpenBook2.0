import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  type:any;
  bookTitle:string;
  info:string = '';
  constructor(private storage: LocalStorageService) { 
    this.bookTitle = this.storage.bookTitle;
  }

  ngOnInit() {
  }

  report(){
    console.log(this.type);
    console.log(this.info);
  }

  

}
