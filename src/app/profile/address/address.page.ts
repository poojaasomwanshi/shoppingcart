import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  addressForm:FormGroup;
  isSubmitted=false;
  constructor(public formBuilder:FormBuilder, private router: Router) { }

  ngOnInit() {
    this.addressForm =this.formBuilder.group({
      housenumber:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      streetadd1:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      streetadd2:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      city:['',[Validators.required,]],
      country:['',[Validators.required,]],
      state:['',[Validators.required,]],
      zipcode:['',[Validators.required]],

        })
  }
 

  submitForm(){
    this.isSubmitted=true;
    if(!this.addressForm.valid){
      console.log("provide required values")
      return false;
    }else{
      alert("address added")
      console.log(this.addressForm.value)
      this.addressForm.reset()
      //move to home page  after login
      this.router.navigate(['/my-account'])

    }

    
  }
  

  
}


