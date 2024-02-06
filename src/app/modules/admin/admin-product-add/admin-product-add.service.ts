import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminProduct } from '../admin-product/adminProduct';
import { AdminProductUpdate } from '../admin-product-update/model/AdminProductUpdate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminProductAddService {

  constructor(private http: HttpClient) {
   }



  addProduct(productForm: AdminProductUpdate):Observable<AdminProductUpdate>{
    return this.http.post<AdminProductUpdate>(`api/admin/products`, productForm);
   }


}
