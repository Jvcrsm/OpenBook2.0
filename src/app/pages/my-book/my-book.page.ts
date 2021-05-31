import { HttpClient } from '@angular/common/http';
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

  allData:any;
  verified:string = "true";
  books = [];
  chapters = [];
  posts = [];
  constructor(private modalController: ModalController, private storage: LocalStorageService, private apiService: ApiService, private router: Router, private http: HttpClient) { 
   this.books = this.storage.userData.books;
   this.chapters = this.storage.userData.chapters;
   this.posts = this.storage.userData.posts;
   this.verified = this.storage.userData.verified;
   this.storage.canPost = true;
  }

  ngOnInit() {
    this.showBooks();
  }

  gerRandomNum(){
    console.log(1);
  }



  public viewBook(bookId, bookTitle){
    this.storage.posts = [];
    this.storage.bookId = bookId;
    this.storage.bookTitle = bookTitle;
    this.storage.chapters = [];

    this.allData.forEach((val) =>{
      val.chapters.forEach(chapter =>{
        if(chapter.bookId == bookId){
          this.storage.chapters.push(chapter);
        }
      })
    });

    this.allData.forEach((val) =>{
      val.posts.forEach(post =>{
        if(post.bookId == bookId){
          this.storage.posts.push(post);
        }
      })
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

  public showBooks(){
    let requestObject = {
      location: 'users/get-all-data',
      method: "GET"
  }

  this.apiService.makeRequest(requestObject).then((data) => {
    this.allData = data;
  });
  }

}
