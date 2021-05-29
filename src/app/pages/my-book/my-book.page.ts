import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PostBookPage } from '../post-book/post-book.page';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.page.html',
  styleUrls: ['./my-book.page.scss'],
})
export class MyBookPage implements OnInit {

  verified:string = "true";
  books = [];
  chapters = [];
  posts = [];
  constructor(private modalController: ModalController, private storage: LocalStorageService, private apiService: ApiService, private router: Router) { 
   this.books = this.storage.userData.books;
   this.chapters = this.storage.userData.chapters;
   this.posts = this.storage.userData.posts;
   this.verified = this.storage.userData.verified;
   this.storage.canPost = true;
  }

  ngOnInit() {
  }



  public viewBook(bookId){
    this.storage.posts = [];
    this.storage.chapters = [];

    this.chapters.forEach((val) =>{
        if(val.bookId == bookId){
          this.storage.chapters.push(val);
        }
    });

    this.posts.forEach((val) =>{
      if(val.bookId == bookId){
        this.storage.posts.push(val);
      }
  });
   

    this.router.navigate(['/read']);
  }

  addBook(){
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PostBookPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
