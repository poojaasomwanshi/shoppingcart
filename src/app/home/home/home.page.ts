import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
    loop:true
  };
  ngOnInit() {
  }

}
