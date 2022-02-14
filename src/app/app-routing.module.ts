import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./Auth/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./Auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile/profile.module').then( m => m.ProfilePageModule)
  },
  
  {
    path: 'products-detail',
    loadChildren: () => import('./product/products-detail/products-detail.module').then( m => m.ProductsDetailPageModule)
  },

  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
