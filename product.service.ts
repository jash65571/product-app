import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, description: 'Powerful computing' },
    { id: 2, name: 'Smartphone', price: 699, description: 'Latest model' },
    { id: 3, name: 'Headphones', price: 199, description: 'Noise-cancelling' }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product|undefined> {
    return of(this.products.find(p => p.id === id));
  }
}
