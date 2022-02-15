import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  constructor(private route: Router) { }
  buttonClick(){
    console.log("hello")
  }
  logsecurityClick(){
    this.route.navigate(['/login-security']);

  }
  addressClick(){
    this.route.navigate(['/address']);

  }
  ngOnInit() {
  }

}
