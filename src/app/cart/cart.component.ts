import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import Product from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books!: Product[] ;
  quantities!: number[] ;
  total = 0;
  product: any ;

  constructor(private cartService: CartService, private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('books'));
    this.books = this.cartService.getAllBooks();
    this.quantities = this.cartService.getAllQuantities();

    for (let i = 0; i < this.books.length; i++) {
            this.cartService.calculate(this.books[i].id, this.quantities[i]).subscribe(res => {
                this.total += res;
            });

            console.log(this.books);
          }
    }

purchase(): void {
      this.cartService.purchase();
      this.books = this.cartService.getAllBooks();
      this.quantities = this.cartService.getAllQuantities();
      this.total = 0 ;
  }

  delete(id: any): void {

    this.productService.get(id as number).subscribe(
      data => {this.product = data ;
               console.log(this.product) ;
               console.log(this.books) ;
               this.books.forEach(item => {
                 if (item.id === this.product.id) {
                   this.quantities.splice(this.books.indexOf(item));
                   this.books.splice(this.books.indexOf(item)) ;
                   localStorage.setItem('books', JSON.stringify(this.books));
                   localStorage.setItem('quantities', JSON.stringify(this.quantities));
                   this.ngOnInit() ;
                   this.router.navigateByUrl('/products');

                 }
               } ) ;
              }
    ) ;

}

}
