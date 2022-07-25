import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
// import { products as data } from './data/products';
import { ProductService } from './services/products.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular app';
  products: IProduct[] = [];
  loading = false;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe( products => {
      this.products = products
      this.loading = false;
    })
  }
}
