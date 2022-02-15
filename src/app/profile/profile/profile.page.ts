import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isloggedin=true;

  constructor(private route: Router) { }

  onClick(){
    console.log("clicked")
    this.route.navigate(['/login']);
  
  }
  buttonClick(){
    this.route.navigate(['/my-account']);

  }
  ngOnInit() {
    
  }
 
}
