import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService,Signupata } from 'src/app/services/authentication.service';
import{Firestore} from '@angular/fire/firestore'
@Component({
  selector: 'app-login-security',
  templateUrl: './login-security.page.html',
  styleUrls: ['./login-security.page.scss'],
})
export class LoginSecurityPage implements OnInit {
  arr: Signupata[] = [];
editMode=false;
   current_user;
     constructor(private dataService: AuthenticationService,) { }
     slectedUser=null;
  ngOnInit() {
    this.dataService.getsignupData().subscribe(
      (user: Signupata[]) => {
        this.arr = user;
        console.log(this.arr);
    
        }
    )
  }
  editmode(){
    this.editMode=true
  }



}
