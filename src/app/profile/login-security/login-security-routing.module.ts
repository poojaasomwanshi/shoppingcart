import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSecurityPage } from './login-security.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSecurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSecurityPageRoutingModule {}
