import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatPaginatorModule

  ],

  exports:[
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatPaginatorModule
  ]

})
export class MaterialModule { }
