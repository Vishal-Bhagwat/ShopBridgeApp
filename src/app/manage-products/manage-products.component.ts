import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';

import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  productList = [];
  order_status:any;
  productName: any;
  description: string;
  name: string;

  constructor(public dialog: MatDialog, private _productDataService : ProductdataService) { }

  ngOnInit() {
    this.productList = this._productDataService.getAllProductList();
    // console.log(this.productList );
  }


  add(){
    let dialogRef = this.dialog.open(AddProductComponent, {
      height: '380px',
      width: '600px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);      
    });
  }

  edit(product){
    let dialogRef = this.dialog.open(AddProductComponent, {
      height: '400px',
      width: '600px',
      data: product
    });
  }

  delete(product){
    this._productDataService.deleteProduct(product.id);
  }


}
