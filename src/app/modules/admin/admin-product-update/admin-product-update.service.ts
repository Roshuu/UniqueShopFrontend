import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminProduct } from '../admin-product/adminProduct';
import { AdminProductUpdate } from './model/AdminProductUpdate';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminProductUpdateService {




  
  constructor(private http: HttpClient) { }


  getProduct(id: number):Observable<AdminProductUpdate>{
    return this.http.get<AdminProductUpdate>(`api/admin/products/${id}`);
  }

  saveProduct(id: number, productForm: AdminProductUpdate) {
    return this.http.put<AdminProductUpdate>(`api/admin/products/${id}`, productForm);
  }

}
