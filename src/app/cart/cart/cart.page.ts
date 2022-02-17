import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/providers/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
public productList=[];
public totalPrice:number=0;
  constructor(private cartsvc:CartService) { }

  ngOnInit() {
    this.productList= this.cartsvc.getCart();
    this.productList.forEach(prod=>{
      this.totalPrice+=prod.quantity*prod.price;
    });
  }

}
