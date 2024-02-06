import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminProductAddService } from './admin-product-add.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrl: './admin-product-add.component.scss'
})
export class AdminProductAddComponent implements OnInit{


constructor(
  private formBuilder: FormBuilder,
  private adminProductAddService: AdminProductAddService,
  private router: Router,
  private snackBar: MatSnackBar){}


productForm!: FormGroup;



ngOnInit() {
   this.productForm = this.formBuilder.group(
    {
      name:[''],
      description: [''],
      category: [''],
      price: [''],
      currency: ['PLN']

    });
  }


submit() {
  this.adminProductAddService.addProduct(this.productForm.value)
    .subscribe(product => {
      this.router.navigate(['/admin/products/update', product.id]);
      this.snackBar.open('Produkt został zapisany','',{duration:3000});
    });

  }
}