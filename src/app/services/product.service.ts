import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model'; // Assuming you have a Product model

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:59507/api/products';
  //private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  // Method to get a product by its ID
  // getProductById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/GetProductsById/${id}`);
  // }

  // Method to get all products
  getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.apiUrl}/GetProducts`);
  //   //return this.http.get<Product[]>(this.dataUrl);
  }


}
