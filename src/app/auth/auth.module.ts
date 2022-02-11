import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { LogoutPage } from './logout/logout.page';
import { SignupPage } from './signup/signup.page';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [LoginPage,LogoutPage,SignupPage],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[LoginPage,LogoutPage,SignupPage]
})
export class AuthModule { }
