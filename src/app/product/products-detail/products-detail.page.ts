import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { CartService } from 'src/app/providers/cart/cart.service';
import { ProductService } from 'src/app/providers/product/product.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.page.html',
  styleUrls: ['./products-detail.page.scss'],
})
export class ProductsDetailPage implements OnInit {
  public category: string;
  public products: any = [];
  
  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController,private cartsvc: CartService, private prodsvc: ProductService) { }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    this.prodsvc.getProducts().subscribe((data: any) => {
      if (this.category === "burger") {
        this.products = data.burger
      } else if (this.category === "pizza") {
        this.products = data.pizza;
      } else if (this.category === "southindian") {
        this.products = data.southindian;
      } else if (this.category === "sandwich") {
        this.products = data.sandwich;
      } else if (this.category === "combo") {
        this.products = data.combo;
      } else if (this.category === "salad") {
        this.products = data.salad;
      }
    }
    );

  }

  public increment(id:number) {
    this.products.forEach(element => {
      if (id == element.id) {
        if(element.quantity){
          element.quantity++;
        }else{
          element.quantity=1;
        }
      }
    });
  }

  public decrement(id:number) {
    this.products.forEach(element => {
      if (id == element.id) {
        if(element.quantity>1){
          element.quantity--;
        }else{
          element.quantity=1;
        }
      }
    });
  }

  public async addToCart(id: number) {
    let status:boolean;
    this.products.forEach(async (element) => {
      if (id == element.id) {
        if(element.quantity){
          status= this.cartsvc.addOrderProduct(element);
        }else{
          const toast1 =await this.toastController.create({
            message: 'Minimum Quantity should be 1 ..',
            duration: 2000
          });
          toast1.present();
        }
        
      }
    });

    if(status){
      const toast2 =await this.toastController.create({
        message: 'Item added to cart successfully..',
        duration: 2000
      });
      toast2.present();
    }else{
      const toast3 =await this.toastController.create({
        message: 'Item updated to cart successfully..',
        duration: 2000
      });
      toast3.present();
      
    }
  }
}
