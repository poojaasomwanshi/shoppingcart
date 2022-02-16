import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //public cart:any=[];

  constructor() {
   // localStorage.setItem("cart",this.cart.toString());
   }

  // public addOrderProduct(orderProduct:any){
  //   this.cart=Array.from(localStorage.getItem("cart"));
  //   console.log(this.cart);
  //   this.cart.push(orderProduct);
  //   localStorage.setItem("cart",this.cart);
  //   //console.log(localStorage.getItem("cart"));
  // }
}
