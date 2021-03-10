import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  option = {
    slidesPerView:1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true
  }

  books: any = [1,2,3,4,5,1,2,3,4,5,1,2,3,1,1,1,1,1,1,1,1,1,1,1]

  constructor() { }

  ngOnInit() {
  }

  

}
