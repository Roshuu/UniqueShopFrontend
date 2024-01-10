import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './modul/product';
import { Page } from '../../shared/model/page';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  page!: Page<Product>;
  //products!: Product[];



  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.getProducts();
  }

 
  getProducts(){
    this.getProductsPage(0,10);
  }

  onPageEvent(event: PageEvent){
    this.getProductsPage(event.pageIndex,event.pageSize)
  }

private getProductsPage(page: number, size: number){
  this.productService.getProducts(page,size)
  .subscribe(page=>this.page=page);
}



}
