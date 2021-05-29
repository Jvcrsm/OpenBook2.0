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

  posts:any = [];
  canPost:boolean;
  constructor(private alertController: AlertController, private storage: LocalStorageService, private apiService:ApiService) { 
    this.posts = this.storage.posts;
    this.canPost = this.storage.canPost;
    console.log(this.posts);
  }

  ngOnInit() {
    
  }


  
}
