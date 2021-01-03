import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Product from '../product';
import { ProductsService } from '../products.service';

@Component({
 selector: 'app-product-add',
 templateUrl: './product-add.component.html',
 styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
 angForm!: FormGroup;
 product = new Product();
 constructor(private fb: FormBuilder, private ps: ProductsService) {this.createForm();
 }
 createForm(): void {
 this.angForm = this.fb.group({
 ProductName: ['', Validators.required ],
 ProductDescription: ['', Validators.required ],
 ProductPrice: ['', Validators.required ],
 releasedate: ['', Validators.required ],
 });
 }
 addProduct(): void {
    this.product.title = this.angForm.get('ProductName')?.value;
    this.product.author = this.angForm.get('ProductDescription')?.value;
    this.product.price = this.angForm.get('ProductPrice')?.value;
    this.product.releasedate = this.angForm.get('releasedate')?.value;
    this.ps.addProduct(this.product).subscribe(
    data => console.log(data)
    ) ;
 }
 ngOnInit(): void {
 }

}
