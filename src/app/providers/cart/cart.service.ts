import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = [];

  constructor() {}

  public addOrderProduct(orderProduct: any) {
    let status = true;
    if (localStorage.getItem("cart") == null) {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
    //console.log(JSON.parse(localStorage.getItem("cart")));
    this.cart = JSON.parse(localStorage.getItem("cart"));

    this.cart.forEach(prod => {
      if (prod.title === orderProduct.title) {
        prod.quantity = orderProduct.quantity;
        //console.log("in cart for");
        status = false;
      }
    });
    if (status) {
      this.cart.push(orderProduct);
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
    console.log(this.cart);
  }

  public getCart():any[]{
    return JSON.parse(localStorage.getItem("cart"))
  }
}
