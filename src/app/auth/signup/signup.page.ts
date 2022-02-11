import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm:FormGroup;
  isSubmitted=false;
  constructor(public formBuilder:FormBuilder, private router: Router) { }

  ngOnInit() {
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
  submitForm(){
    this.isSubmitted=true;
    if(!this.signupForm.valid){
      console.log("provide required values")
      return false;
    }else{
      alert("Login Successfull")
      console.log(this.signupForm.value)
      this.signupForm.reset()
      //move to home page  after login
      this.router.navigate(['tabs/home'])

    }
  }
 
}

