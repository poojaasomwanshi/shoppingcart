<ion-header color="danger">
  <ion-toolbar color="warning">
    <ion-title>SignUp </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="form-content" >
  <ion-item class="signupheader ion-no-padding" lines="none">
<div>
     <h1>Getting Started</h1>
     <div><p>Create account to continue!</p></div> 
      
    </div>
        <ion-img  slot="end" src="../../../assets/image/auth/fast-food.png">
  
        </ion-img>
   

  </ion-item>
<form [formGroup]="signupForm" (ngSubmit)="submitForm()" novalidate><ion-card >
  <ion-card-content>
 
   <ion-item  class="label">
    <ion-icon name="person" slot="end"></ion-icon>
  <ion-label position="floating">Username</ion-label>
  <ion-input  type="name"   formControlName="username" ></ion-input>
</ion-item>
<span class="error ion-padding" *ngIf="isSubmitted && errorControl.username.errors?.required">
  username is required.
</span>
<span class="error ion-padding" *ngIf="!signupForm.reset &&isSubmitted && errorControl.username.errors?.pattern">
  Username must contain at least 3 letters
</span>
<br>
<ion-item  class="label">
  <ion-icon name="call" slot="end"></ion-icon>
<ion-label position="floating">Mobile</ion-label>
<ion-input  type="tel"  formControlName="mobile"   ></ion-input>
</ion-item>
<span class="error ion-padding" *ngIf="isSubmitted && errorControl.mobile.errors?.required">
  mobile number is required.
</span>
<span class="error ion-padding" *ngIf="!signupForm.reset &&isSubmitted && errorControl.mobile.errors?.pattern">
 mobile number should contains only 10 digits
</span>
<br>
    <ion-item  class="label">
      <ion-icon name="mail" slot="end"></ion-icon>
    <ion-label position="floating">Email</ion-label>
    <ion-input  type="email"   formControlName="email" ></ion-input>
  </ion-item>
  <span class="error ion-padding" *ngIf="  isSubmitted && errorControl.email.errors?.required">
    Email is required.
  </span>
  <span class="error ion-padding" *ngIf="!signupForm.reset &&isSubmitted && errorControl.email.errors?.pattern">
    Please provide valid email id.
  </span>
<br>  
<ion-item class="label"  > <ion-label position="floating">Password</ion-label>
  <ion-input  [type]="showpassword ? 'text' : 'password'" formControlName="password"></ion-input>
  
  <ion-icon [name]="passwordToggleicon" slot="end" (click)="togglePassword()"></ion-icon>
</ion-item>
  <span class="error ion-padding" *ngIf="isSubmitted && errorControl.password.errors?.required">
    password is required.
  </span>
  <span class="error ion-padding" *ngIf="!signupForm.reset &&isSubmitted && errorControl.password.errors?.pattern">
    Password must contain at least 6 and max 16 letters with special symbol,upper-lower case character and number.
  </span>
  <ion-button expand="block"  class="signupButton" type="submit" >SignUp</ion-button>


</ion-card-content>
  
</ion-card>

</form> 

<p class="bottomtext">Already have account ? <a href="/login" class="register"> LogIn here ..</a> </p>
 
</ion-content>


