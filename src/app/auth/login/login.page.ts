import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;
  isSubmitted=false;
  constructor(public formBuilder:FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm =this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
      password:['',[Validators.required,Validators.pattern(/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{6,16}$/)]]
//  min 6 max 16 letter password, with at least a symbol, upper and lower case letters and a number , and no whitespace
    })
  }
  get errorControl() {
    return this.loginForm.controls;
  }
  submitForm(){
    this.isSubmitted=true;
    if(!this.loginForm.valid){
      console.log("provide required values")
      return false;
    }else{
      alert("Login Successfull")
      console.log(this.loginForm.value)
      this.loginForm.reset()
      //move to home page  after login
      this.router.navigate(['tabs/home'])

    }
  }
 
}
