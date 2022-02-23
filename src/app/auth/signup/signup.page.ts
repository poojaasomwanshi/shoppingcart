import { Component, Input, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService,Signupata,Regdata } from 'src/app/services/authentication.service';
import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
//  users:Regdata;
  userregdata:Regdata;  signupForm:FormGroup;
  isSubmitted=false;
  showpassword=false;
  passwordToggleicon='eye';
  signupdata: Signupata = null;
  signupdatas:Signupata[]=[];
  id: any;
arr:any={};
i;
  constructor(public formBuilder:FormBuilder, private router: Router,private dataService: AuthenticationService,) {
    this.dataService.getsignupData().subscribe(res=>{
      console.log(res)
      this.signupdatas=res;
    })
 
   }

  ngOnInit() {
    this.dataService.getsignupDataById(this.id).subscribe(res => {
      this.signupdata= res;
      // console.log(res)
      console.log(this.signupdatas.length)
    });
    this.signupForm =this.formBuilder.group({
      username:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      mobile:['',[Validators.required,Validators.pattern(/^([+]\d{2})?\d{10}$/)]],
      email:['',[Validators.required,Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
      password:['',[Validators.required,Validators.pattern(/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{6,16}$/)]]
//  min 6 max 16 letter password, with at least a symbol, upper and lower case letters and a number , and no whitespace
    })
  }
  get errorControl() {
    return this.signupForm.controls;
  }
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

  submitForm(){
    this.isSubmitted=true;
    if(!this.signupForm.valid){
      console.log("provide required values")
      return false;
    }else{
      
      // this.userregdata=Object.assign(this.userregdata,this.signupForm.value);
      console.log(this.userregdata)

      this.adduserdatatolocalstorage(this.userData())
      console.log(this.userregdata)      // console.log(this.signupForm.value.username , this.signupForm.value.email , this.signupForm.value.mobile)
      this.signupForm.reset()
      //move to home page  after login
      this.router.navigate(['/home'])
      // var values = (localStorage.getItem('Users'));
      // console.log(values)



    }
  }
  userData():Regdata{
return this.userregdata={
  email:this.email.value,
  password:this.password.value
}
  }
  get email(){
    return this.signupForm.get('email') as FormControl;
  }
  get password(){
    return this.signupForm.get('password') as FormControl;
  }
  adduserdatatolocalstorage(userregdata:Regdata){
    let users=[];
    if(localStorage.getItem('Reg')){
      users=JSON.parse(localStorage.getItem('Reg'));
      users=[userregdata, ...users]
    }
    else{
      users=[userregdata];
    }
    localStorage.setItem('Reg',JSON.stringify(users))

  } 
  getuser(){
    let user_records=new Array();
  
    user_records=JSON.parse(localStorage.getItem('Reg'))?JSON.parse(localStorage.getItem('Reg')):[]
if(user_records){
  for (let i=0; i<user_records.length;i++){
    console.log(user_records[i].email,user_records[i].password)

  }
}

  }
  async addregUser(){
    this.signupdata=this.signupForm.value
    
    await this.dataService.addsignupData(this.signupdata)
    }
   
}

