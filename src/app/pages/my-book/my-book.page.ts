import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.page.html',
  styleUrls: ['./my-book.page.scss'],
})
export class MyBookPage implements OnInit {

  verified:string = "true";
  books = [];
  constructor(private modalController: ModalController, private storage: LocalStorageService, private apiService: ApiService, private router: Router) { 
   this.books = this.storage.userData.books;
   this.verified = this.storage.userData.verified;
  }

  ngOnInit() {
   this.getUserBooks();
  }

  public getUserBooks(){
 
  }


}
