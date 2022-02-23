import { Component, Input, LOCALE_ID, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService,Note,Userdata,Logindata,Signupata } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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
//Get user data
// getuser(){
//   let user_records=new Array();
//   user_records=JSON.parse(localStorage.getItem('Reg'))?JSON.parse(localStorage.getItem('Reg')):[]
// if(user_records){
// for (let i=0; i<user_records.length;i++){
//   this.storedemail=user_records[i].email
//   this.storedpassword=user_records[i].password
//   console.log(user_records[i].email,user_records[i].password)

// }
// }

// }
//login form submission

  submitForm(){
    
  
  this.isSubmitted=true;

  let email,psw;
  var i;
  email=this.loginForm.value.email;
  
  psw=this.loginForm.value.password;
  
  // let user_records=new Array();
  // user_records=JSON.parse(localStorage.getItem("Reg"))?JSON.parse(localStorage.getItem("Reg")):[]
  // if(user_records.some((v)=>{return v.email==email && v.psw==psw}))
  // {
  //   alert("Login Pass");
  //   let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]
  //  localStorage.setItem('email',current_user.email);
  //  localStorage.setItem('password',current_user.psw);
  // }
  // else
  // {
  //   alert('Login Fail');
  // }
 



  let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem('Reg'))?JSON.parse(localStorage.getItem('Reg')):[]
  if(user_records){
  for (i=0; i<user_records.length;i++){
    this.storedemail=user_records[i].email
    this.storedpassword=user_records[i].password
    console.log(user_records[i].email,user_records[i].password)}

  }

    if( this.storedemail==email && this.storedpassword==psw && this.loginForm.valid){
       // alert("Login Successfull")
      //storing login to localstorage
      this.user=Object.assign(this.user,this.loginForm.value);
      console.log(this.user)

      this.addusertolocalstorage(this.user)
      // console.log(this.loginForm.value.email)
      this.loginForm.reset()
      this.router.navigate(['/home'])

      //move to home page  after login
    
     
   
    }else{
      alert("plese enter valid details..")
      console.log("provide required values")
      this.router.navigate(['/login'])
      return false;
    }
  }

  //logindata to localstorage
  addusertolocalstorage(user){
    let a=this.loginForm.value.email;
    let users=[];
    if(localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users'));
      users=[user, ...users]
    }
    else{
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(users))
  }


  // async addlogUser(){
  //   this.loguser=this.loginForm.value
    
  //   await this.dataService.addlogUser(this.loguser)
  //   }
   

   
    testdata(){
      let user_records=new Array();
      user_records=JSON.parse(localStorage.getItem('Reg'))?JSON.parse(localStorage.getItem('Reg')):[]
    if(user_records){
    for (let i=0; i<user_records.length;i++){
      this.storedemail=user_records[i].email
      this.storedpassword=user_records[i].password
      console.log(user_records[i].email,user_records[i].password)
    
    }
    }
      
      console.log(this.storedemail,"hello")

      // this.ar=JSON.stringify(this.loguserdatas)
      // let a=JSON.parse(this.ar)
      for(var i in this.signupdatas){
         let email=this.signupdatas[i].email;
        // console.log(this.email);
         console.log(this.signupdatas[i].email)
      }
     
//       for(var i in this.loguserdatas){
//         this.emails=this.loguserdatas[i].email;
//         this.password=this.loguserdatas[i].password;

//       //  console.log(this.emails);
//       //  console.log(this.loguserdatas[i].email)
    
//      }
//      localStorage.setItem('user',JSON.stringify(this.loguserdatas))
//      localStorage.setItem('email',this.emails );
//      localStorage.setItem('password',this.password );
// console.log(JSON.parse(localStorage.getItem('user')));
// this.ar=JSON.parse(localStorage.getItem('user')
// );
for (var i in values) {
this.email=values[i].email
console.log(this.email)
}

if(this.loginForm.value.email== this.user.email){
  console.log("ok")
}
var values = JSON.parse(localStorage.getItem('Users')|| "[]");
console.log(values)
var valuess = (localStorage.getItem('Users'));
console.log(valuess)
values.foreach(function(user){
  console.log(user.email)
})
}




}
