import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/providers/product/product.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.page.html',
  styleUrls: ['./products-detail.page.scss'],
})
export class ProductsDetailPage implements OnInit {
  public category: string;
  public products: any = [];
  constructor(private activatedRoute: ActivatedRoute, private prodsvc: ProductService) { }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    this.prodsvc.getProducts().subscribe((data:any) => {
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

}
