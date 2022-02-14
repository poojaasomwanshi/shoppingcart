import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideImage=[
    //"../../../assets/image/Dosa.jfif",
    "../../../assets/image/Salad.jfif",
    "../../../assets/image/Sandwitch.jfif",
    "../../../assets/image/Burger/display-burger.jpg"
  ];

  trendingImage=[
    {"imgUrl":"../../../assets/image/Burger/veg-burger.jpg"},
    {"imgUrl":"../../../assets/image/Pizza/chicken-pizza.jpg"},
    {"imgUrl":"../../../assets/image/Salad/caesar-salad.jpg"},
    {"imgUrl":"../../../assets/image/SouthIndian/ravaDosa-SI.jpg"}
  ];

  constructor() { }
  slideOpts = {
    //initialSlide: 1,
    speed: 300,
    autoplay:true,
    loop:true
  };
  ngOnInit() {
  }

}
