import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/providers/cart/cart.service';
 declare var RazorpayCheckout:any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public productList: any = [];
  public totalPrice: number = 0;
  public message: string = '';
  public isCartEmpty: boolean = false;
  public isLogin:boolean=false;
  constructor(private cartsvc: CartService, private route: Router) { }

  ngOnInit() {
    if(1){
      this.isLogin=true;
      
      this.productList = this.cartsvc.getCart();
      this.calculateTotalPrice();
      if (this.productList.length === 0) {
        this.isCartEmpty = true;
        this.message = 'No items in cart to display';
      }else{
        this.isCartEmpty=false;
      }
    }else{
      this.message="Please login to access";
    }
    
    
  }
  public doRefresh(event) {
    this.productList = this.cartsvc.getCart();
    this.calculateTotalPrice();
    if (this.productList.length === 0) {
      this.isCartEmpty = true;
      this.message = 'No items in cart to display';
    }else{
      this.isCartEmpty=false;
    }
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
  public increment(title: string) {
    this.totalPrice = 0;
    this.productList.forEach(element => {
      if (title == element.title) {
        element.quantity++;
      }
    });
    this.calculateTotalPrice();
    localStorage.setItem("cart", JSON.stringify(this.productList));
  }

  public decrement(title: string) {
    this.totalPrice = 0;
    this.productList.forEach(element => {
      if (title == element.title) {
        if (element.quantity > 1) {
          element.quantity--;
        }
      }
    });
    this.calculateTotalPrice();
    localStorage.setItem("cart", JSON.stringify(this.productList));
  }

  public calculateTotalPrice() {
    this.totalPrice = 0;
    this.productList.forEach(prod => {
      this.totalPrice += prod.quantity * prod.price;
    });
  }

  public deleteFromCart(title: string) {
    this.productList = this.cartsvc.deleteFromCart(title);
    if (this.productList.length === 0) {
      this.isCartEmpty = true;
      this.message = 'No items in cart to display';
    }else{
      this.isCartEmpty=false;
    }
    this.calculateTotalPrice();
  }

  public proceedToPay(){
    console.log('razorpay');
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: "INR", // your 3 letter currency code
      key: "rzp_test_1DP5mmOlF5G5ag", // your Key Id from Razorpay dashboard
      amount: 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Razorpay',
      prefill: {
        email: 'test@razorpay.com',
        contact: '9990009991',
        name: 'Razorpay'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed');
        }
      }
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }
}
