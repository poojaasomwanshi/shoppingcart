import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePage } from './profile/profile.page';
import { MyAccountPage } from './my-account/my-account.page';

@NgModule({
  declarations: [ProfilePage,MyAccountPage],
  imports: [
    CommonModule
  ],
  exports:[ProfilePage,MyAccountPage]
})
export class ProfileModule { }
