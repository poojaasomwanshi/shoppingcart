import { Component, Input, LOCALE_ID, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService,Note,Userdata,Logindata,Signupata,Regdata } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userregdata:Regdata; 
  loguser: Logindata = null;
  loguserdatas:Logindata[]=[];
email;password;


users:Signupata;
  user:any={};
  signupdata: Signupata = null;
  signupdatas:Signupata[]=[];



  loginForm:FormGroup;
  isSubmitted=false;
  showpassword=false;
  passwordToggleicon='eye';



  id: any;
  storedemail;
  storedpassword;
  constructor(public formBuilder:FormBuilder, private router: Router,private dataService: AuthenticationService,) { 
    this.dataService.getlogUsers().subscribe(res=>{
      console.log(res)

      this.loguserdatas=res;
    })
    this.dataService.getsignupData().subscribe(res=>{
      console.log(res)
      this.signupdatas=res;
    })
 
  }

  ngOnInit() {
    this.dataService.getlogUserById(this.id).subscribe(res => {
      this.loguser = res;
    });
    this.loginForm =this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
      password:['',[Validators.required,Validators.pattern(/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{6,16}$/)]]
//  min 6 max 16 letter password, with at least a symbol, upper and lower case letters and a number , and no whitespace
    })
    
  }


  //error control
  get errorControl() {
    return this.loginForm.controls;
  }


//password visibility

togglePassword():void{
this.showpassword=!this.showpassword;
if(this.passwordToggleicon=='eye')
{
  this.passwordToggleicon='eye-off'
}
else{
  this.passwordToggleicon='eye'
}
}
//login form submission

  submitForm(){
    
  
  this.isSubmitted=true;
  var i;
  let email,password;
  email=this.loginForm.value.email;
  password=this.loginForm.value.password;

let user_records=new Array();
  user_records=JSON.parse(localStorage.getItem("Reg"))?JSON.parse(localStorage.getItem("Reg")):[]
  if(this.loginForm.valid && user_records.some((v)=>{return v.email==email && v.password==password}))
  {
    alert("Login successful");
    let current_user=user_records.filter((v)=>{return v.email==email && v.password==password})[0]
   this.adduserdatatolocalstorage(this.userData())
   this.loginForm.reset()
      this.router.navigate(['/home'])
  }
  else
  {
    alert('Login Fail');
  }

  }
//storing login data to local storage
  userData():Regdata{
    return this.userregdata={
      email:this.logemail.value,
      password:this.logpassword.value
    }
      }
      get logemail(){
        return this.loginForm.get('email') as FormControl;
      }
      get logpassword(){
        return this.loginForm.get('password') as FormControl;
      }
  adduserdatatolocalstorage(userregdata:Regdata){
    let users=[];
    if(localStorage.getItem('log')){
      users=JSON.parse(localStorage.getItem('log'));
      users=[userregdata, ...users]
    }
    else{
      users=[userregdata];
    }
    localStorage.setItem('log',JSON.stringify(users))

  } 

  // async addlogUser(){
  //   this.loguser=this.loginForm.value
    
  //   await this.dataService.addlogUser(this.loguser)
  //   }
  gotoRegister(){
    this.router.navigate(['/signup'])

  }

}
