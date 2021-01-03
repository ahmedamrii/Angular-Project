import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import product from './product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CartService {

  uri = 'http://localhost:8080/BStore/api/book';

  books: product[] = [];
  quantities: number[] = [];

  constructor(private http: HttpClient) { }

  add(book: product, quantity: number): void {
    console.log(localStorage.getItem('books'));
    this.books = JSON.parse(localStorage.getItem('books') || '[]' ) ;
    console.log(this.books);
    this.books.push(book);
    console.log(this.books);
    this.quantities.push(quantity);
    localStorage.setItem('books', JSON.stringify(this.books));
    localStorage.setItem('quantities', JSON.stringify(this.quantities));
  }

  getAllBooks(): product[] {
    return JSON.parse(localStorage.getItem('books') || '[]');
  }

  getAllQuantities(): number[] {
    return JSON.parse(localStorage.getItem('quantities') || '[]');
  }

  calculate(ISBN?: number, qte?: number): Observable<number> {
    return this.http.get<number>(`${this.uri}/calculerPrix/${ISBN}/${qte}`);
  }

  purchase(): void {
    localStorage.removeItem('books');
    localStorage.removeItem('quantities');
  }
}
