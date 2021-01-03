import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import Product from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products: Observable<Array<Product>>;
  quantityForm = new FormGroup({
    quantity : new FormControl('', Validators.max(5)) });
  // quantity: number ;

  constructor(private ps: ProductsService , private cs: CartService, private route: Router) {
    this.products = this.ps.getAll() ;
   }

  ngOnInit(): void {
    this.products = this.ps.getAll() ;
  }
  deleteProduct(id: any): void {
    this.ps.deleteProduct(id as number).subscribe(
      data => {
        console.log(data) ;
        this.products = this.ps.getAll() ;
      }
    ) ;
  }
  addToCart(id: any): void {
    this.ps.get(id as number).subscribe(book => {
        this.cs.add(book, this.quantityForm.get('quantity')?.value);
        this.route.navigate(['/shopping-cart']);
    });
}

getByid(id: any): Observable<Product> {
 return this.ps.get(id as number) ;
}

}
