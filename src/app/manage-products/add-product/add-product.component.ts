import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from "@angular/forms";

import { ProductdataService } from '../../productdata.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form: any;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _productDataService : ProductdataService
) {
      this.form = this.fb.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        description:['',Validators.required]
      });
      console.log(data);
      if(data && data!='false' && data!='true'){
        this.form.controls['name'].setValue(data.name);
        this.form.controls['description'].setValue(data.description);
        this.form.controls['price'].setValue(data.price);
        if(data.id){
          this.isExistingProduct = true; 
        }
    }
  }
  isExistingProduct = false; 

  ngOnInit() {
  }

  save(){
    // console.log(this.form.value);
    if(this.isExistingProduct){
      let obj = this.form.value;
      obj.id = this.data.id;
      this._productDataService.editProduct(obj);
    }else{
      this._productDataService.addProduct(this.form.value);
    }
      this.dialogRef.close();
  }

  close(){
    this.dialogRef.close();
  }

}
