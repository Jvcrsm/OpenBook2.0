import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  allData:any;

  option = {
    slidesPerView:1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true
  }

  books = [];
  sample = [1,1];
  constructor(private menu: MenuController, private apiService: ApiService) { 
    
  }
  
  ngOnInit() {
    this.menu.enable(true);
    this.showBooks();
  }

  public showBooks(){
    let requestObject = {
      location: 'users/get-all-data',
      method: "GET"
  }

  this.apiService.makeRequest(requestObject).then((data) => {
    this.allData = data;
    this.getBooks();
  });
  }

  public getBooks(){
    this.allData.forEach((val) =>{
      val.books.forEach(book =>{
        this.books.push(book);
      })
    });
  }

  

}
