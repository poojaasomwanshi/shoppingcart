import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePage } from './profile/profile.page';
import { MyAccountPage } from './my-account/my-account.page';
import { LoginSecurityPage } from './login-security/login-security.page';
import { AddressPage } from './address/address.page';
@NgModule({
  declarations: [ProfilePage,MyAccountPage,LoginSecurityPage,AddressPage],
  imports: [
    CommonModule
  ],
  exports:[ProfilePage,MyAccountPage,LoginSecurityPage,AddressPage]
})
export class ProfileModule { }
