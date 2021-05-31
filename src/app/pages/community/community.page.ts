import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  title:string = "The girl who reads";
  by:string = "Juan Dela Cruz";
  genre = ["sample", "sample"];
  posts:any = [];
  canPost:boolean;
  book:any = [];
  constructor(private alertController: AlertController, private storage: LocalStorageService, private apiService:ApiService) { 
    this.posts = this.storage.posts;
    this.canPost = this.storage.canPost;
    console.log(this.posts);
  }

  ngOnInit() {
    this.setBook();
  }

  setBook(){
    this.storage.books.forEach(element => {
      if(this.storage.bookId == element._id){
        this.book.push(element);
        return;
      }
    });

    this.title = this.book[0].title;
    this.by = this.book[0].by;
    this.genre = this.book[0].genre;
  }


  
}
