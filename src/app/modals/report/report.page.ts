import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
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
  constructor(private storage: LocalStorageService, private apiService:ApiService, private modalController: ModalController) { 
    this.bookTitle = this.storage.bookTitle;
  }

  ngOnInit() {
  }

  report(){
    let requestObject = {
      location: "users/report",
      method: "POST",
      body: {
        bookId: this.storage.bookId,
        info: this.info,
        type: this.type,
        title: this.bookTitle
      }
    }

    this.apiService.makeRequest(requestObject).then((val) => {
      this.modalController.dismiss();
  });
  }

  

}
