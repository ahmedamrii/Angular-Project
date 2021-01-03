import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from './product';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class ProductsService {
 uri = 'http://localhost:8080/BStore/';
 constructor(private http: HttpClient) { }
 addProduct(product: Product): Observable<Product> {
 return this.http.post(`${this.uri}api/book/addBook`, product );
}
 getAll(): Observable<Array<Product>> {
   return this.http.get<Array<Product>>('http://localhost:8080/BStore/api/book/getAll') ;
  }

 deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.uri}api/book/deleteBook/${id}`);
  }
  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.uri}/api/book/getBook/${id}`);
}
  update(product: Product): Observable<Product> {
    return this.http.post(`${this.uri}/api/book/updateBook`, product);
  }
}

