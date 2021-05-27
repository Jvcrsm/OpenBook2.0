import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage implements OnInit {

  code:string;
  verified:string =  "false";
  today = new Date().toLocaleDateString();
  userData:any;
  count =  {
    chapters: 1,
    books: 1,
    notes: 1
  }
  constructor(private storage: LocalStorageService, private apiService: ApiService, private alertController: AlertController) { 
    this.userData = this.storage.userData;
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.count.chapters = this.userData.chapters.length;
    this.count.books = this.userData.books.length;
    this.count.notes = this.userData.posts.length;
    this.verified = this.userData.verified;
  }

 
  async verify(){
    let requestObject = {
      location: 'users/verify',
      method: "POST",
      body:{
        email:this.userData.email ,
        name: this.userData.name,
        id: this.userData._id
      }
    }
    this.apiService.makeRequest(requestObject).then((res) =>{
     this.code = res;
    });

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Enter code below',
      subHeader: 'please check your email',
      inputs: [
        {
          name: 'name4',
          type: 'text',
          placeholder: 'Verification Code',
          
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
           
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            if(this.code == alertData.name4 ){
              this.verified = "true"
              this.storage.userData.verified = "true";

              let requestObject = {
                location: 'users/code',
                method: "POST",
                body:{
                  id: this.userData._id
                }
              }
              this.apiService.makeRequest(requestObject).then((res) =>{
               this.code = res;
              });

            }else{
              this.presentAlert();
            }
           
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Verification Code does not match',
      buttons: ['OK']
    });

    await alert.present();

  }
  

}
