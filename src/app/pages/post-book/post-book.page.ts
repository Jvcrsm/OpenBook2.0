import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-post-book',
  templateUrl: './post-book.page.html',
  styleUrls: ['./post-book.page.scss'],
})
export class PostBookPage implements OnInit {

  genre:any;
  public book = {
    title: '',
    summary: '',
    by: '',
    genre:''
  }
  constructor(private storage: LocalStorageService, private apiService:ApiService, protected alertController:AlertController, private modalController:ModalController) {
    this.book.by =  this.storage.userData.name;
   }

  ngOnInit() {
  }

  addBook(){
    this.book.genre = this.genre;
    
    if(!this.book.title || !this.book.summary){
      const err = this.presentAlert('All fields are required');
      return err
    }
    let requestObject = {
      location: "users/create-book",
      method: "POST",
      body: this.book
    }

    this.apiService.makeRequest(requestObject).then((val) => {
      if(val.statusCode == 201) {
          val.newPost.ago = "Now";
          this.storage.didPost = true;
          this.storage.userData.books.push(val.newPost);
          this.modalController.dismiss();
      } else {
          console.log("Something went wrong, your post could not be created.");
      }
  });
  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  public closeModal(){
    this.modalController.dismiss();
  }

}
