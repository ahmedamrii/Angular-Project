import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Product from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  book: Product = {id: 0, title: '', author: '', releasedate: null, price: 0};
  constructor(private route: ActivatedRoute, private ps: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ps.get(params.id).subscribe(book => {
          this.book = book;
      });
  });
  }
/*
  update(id: number,title: any,author: any,price: any,releasedate: any){
    let product = {id,title,author,price,releasedate}
    this.ps.update(product).subscribe((à => {
      console.log('updated');
    }));

  }
*/
}
