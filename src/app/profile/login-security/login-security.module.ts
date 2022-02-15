import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSecurityPageRoutingModule } from './login-security-routing.module';

import { LoginSecurityPage } from './login-security.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginSecurityPageRoutingModule
  ],
  declarations: [LoginSecurityPage]
})
export class LoginSecurityPageModule {}
