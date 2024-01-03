import { Injectable } from '@angular/core';
import { Product } from './modul/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts():Product[] {
    return  [
      {
      
        name:"product 2",
        category:"Kategoria2",
        description:"opis 2",
        price:12.99,
        currency: "PLN"
      },
      {
        name:"product 3",
        category:"Kategoria3",
        description:"opis 3",
        price:13.99,
        currency: "PLN"
      }];
      
  }
}
