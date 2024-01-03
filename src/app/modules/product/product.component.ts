import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './modul/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
 
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.getProducts();
  }

getProducts(){
  this.products = this.productService.getProducts();
}
}
