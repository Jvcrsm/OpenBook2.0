import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { MessagePage } from 'src/app/modals/message/message.page';
import { ReportPage } from 'src/app/modals/report/report.page';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {

  title:string = "The girl who reads";
  by:string = "Juan Dela Cruz";
  genre = ["sample", "sample"];
  canPost:boolean;
  chapters:any = [];
  book:any = [];
  constructor(private modalController: ModalController, private apiService: ApiService, private storage: LocalStorageService, private router: Router, private alertController:AlertController) {
    this.chapters = this.storage.chapters;
    this.canPost = this.storage.canPost;
   }

  ngOnInit() {
    this.setBook();
  }

  async sendMessage(){
    this.storage.to = this.book[0].by;
    this.storage.otherId = this.book[0]._id;
    const modal = await this.modalController.create({
      component: MessagePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  viewPage(index){
    this.storage.bookPage = index;
    this.router.navigate(['/page']);
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

  addChapter(){
    this.router.navigate(['post-chapter']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ReportPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Letter',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Input Letter here'
        }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  
}
