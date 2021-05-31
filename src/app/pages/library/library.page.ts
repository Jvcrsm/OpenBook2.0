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

  userName:string = "Pepito Manaloto";
  option = {
    slidesPerView:1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true
  }

  books = [];
  sample = [1,1];
  constructor(private menu: MenuController, private apiService: ApiService, private storage: LocalStorageService, private router: Router) { 
    this.storage.canPost = false;
    // this.userName = this.storage.userData.name;
  }
  
  ngOnInit() {
    this.showBooks();
    this.menu.enable(true);
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
    this.storage.books = [];
    this.allData.forEach((val) =>{
      val.books.forEach(book =>{
        this.books.push(book);
        this.storage.books.push(book);
      })
    });
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
  

}
