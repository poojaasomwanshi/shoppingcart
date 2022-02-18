import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/providers/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
public productList:any=[];
public isEditEnabled:boolean=false;
public totalPrice:number=0;
  constructor(private cartsvc:CartService) { }

  ngOnInit() {
    this.productList= this.cartsvc.getCart();
    this.calculateTotalPrice();
  }

  public edit(){
    this.isEditEnabled=true;
  }

  public submit(){
    this.isEditEnabled=false;
  }

  public increment(title:string) {
    this.totalPrice=0;
    this.productList.forEach(element => {
      if (title == element.title) {
          element.quantity++;
      }
    });
    this.calculateTotalPrice();
  }

  public decrement(title:string) {
    this.totalPrice=0;
    this.productList.forEach(element => {
      if (title == element.title) {
          element.quantity--;
      }
    });
    this.calculateTotalPrice();
  }

  public calculateTotalPrice(){
    this.productList.forEach(prod=>{
      this.totalPrice+=prod.quantity*prod.price;
    });
  }
}
