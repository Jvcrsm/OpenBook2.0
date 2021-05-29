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
    title: ''
  }
  constructor(private storage:LocalStorageService, private router: Router) { }

  ngOnInit() {
  }

  addChapter(){
    this.storage.chapters.push(this.Chapter);
    this.router.navigate(['read']);
  }
}
