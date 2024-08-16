import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7169/api/products';

  constructor(private http: HttpClient) { }

  // Method to get a product by its ID
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GetProductsById/${id}`);
  }

  // Method to get all products
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetProducts`);
  }
}
