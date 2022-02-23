import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  constructor(private router: Router,private alertController: AlertController) { }

  ngOnInit() {}

  public async checkLogin(category:string){
    if(0){
      const alert = await this.alertController.create({
        header: 'Please Login to Access !!!',
        backdropDismiss:true,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            id: 'cancel-button',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Login',
            id: 'confirm-button',
            handler: () => {
              this.router.navigate(['/login']);
            }
          }
        ]
      });
  
      await alert.present();
    }else{
    this.router.navigate(['products-detail/'+category]);
    }
  }

}
