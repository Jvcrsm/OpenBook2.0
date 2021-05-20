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

  userId: any;
  books = [{
    _id: '1',
    title: 'Default',
    summary: 'Default',
    by:'',
    genre: []
  }]
  constructor(private modalController: ModalController, private storage: LocalStorageService, private apiService: ApiService, private router: Router) { 
    this.userId = this.storage.userId;
    this.storage.canPost = true;
  }

  ngOnInit() {
    // console.log(this.userId);
    this.showUserBooks();
  }

  public showUserBooks(){
    let requestObject = {
      location: `users/get-user-data/${this.userId}`,
      method: "GET"
  }

  this.apiService.makeRequest(requestObject).then((data) => {
    this.books = data.user.books
  });
  }


  public viewBook(id, title, by){
    this.storage.bookId = id;
    this.storage.bookTitle = title;
    this.storage.by = by;
    this.router.navigate(['/view-book']);
  }

  async presentModal() {
    // const modal = await this.modalController.create({
    //   component: PostBookPage,
    //   cssClass: 'my-custom-class'
    // });
    
    // await modal.present();

    // const { data } = await modal.onWillDismiss();
    // if(this.storage.didPost){
    //   this.books.push(data);
    //   this.storage.didPost = false;
    // }
    
  }

}
