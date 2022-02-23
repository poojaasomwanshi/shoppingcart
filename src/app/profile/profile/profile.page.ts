import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService,Signupata } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isloggedin=true;
  arr: Signupata[] = [];

  constructor(private route: Router,private dataService: AuthenticationService) { }

  onClick(){
    console.log("clicked")
    this.route.navigate(['/login']);
  
  }
  buttonClick(){
    this.route.navigate(['/my-account']);

  }
  buttonsClick(){
    this.route.navigate(['/demo']);

  }
  logoutClick(){
    this.route.navigate(['/login']);

  }
  ngOnInit() {
    this.dataService.getsignupData().subscribe(
      (user: Signupata[]) => {
        this.arr = user;
        console.log(this.arr);
    
        }
    )
  }
 
}
