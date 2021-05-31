import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  to:string = "sample";
  content:string = "";
  constructor(private storage: LocalStorageService) { 
    this.to = this.storage.to;
    console.log(this.storage.otherId);
  }

  ngOnInit() {
  }

}
