import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-post-chapter',
  templateUrl: './post-chapter.page.html',
  styleUrls: ['./post-chapter.page.scss'],
})
export class PostChapterPage implements OnInit {

  public Chapter = {
    title: '', 
    content: '',
    bookId: ''
  }
  constructor(private storage:LocalStorageService, private router: Router) { }

  ngOnInit() {
  }

  addChapter(){
    console.log(this.storage.bookId);
    // this.storage.chapters.push(this.Chapter);
    // this.router.navigate(['read']);

  //   let requestObject = {
  //     location: "users/create-chapter",
  //     method: "POST",
  //     body: this.Chapter
  //   }

  //   this.apiService.makeRequest(requestObject).then((val) => {
  //     if(val.statusCode == 201) {
  //         this.storage.didPost = true;
  //         this.modalController.dismiss(val.newPost);
  //        // console.log(val.newPost.bookId[0]);
  //     } else {
  //         console.log("Something went wrong, your chapter could not be created.");
  //     }
  // });
  }
}
