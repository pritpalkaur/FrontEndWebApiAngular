import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model'; // Assuming you have a Product model

@Component({
  selector: 'app-product-list',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['productId', 'productName', 'prouctDescription'];
  dataSource: Product[] = [];

  // Properties for creating and editing products
  newProduct: Product = { productId: 0, productName: '', productCat: '' };
  isEditing: boolean = false;
  editingProductId: number | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        this.dataSource = this.products;
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }

  // createProduct(): void {
  //   if (this.newProduct.productName && this.newProduct.productCat) {
  //     this.productService.createProduct(this.newProduct).subscribe(
  //       (product: Product) => {
  //         this.products.push(product);
  //         this.loadProducts(); // Refresh the list
  //         this.resetForm();
  //       },
  //       error => {
  //         console.error('Error creating product', error);
  //       }
  //     );
  //   }
  // }

  // editProduct(product: Product): void {
  //   this.newProduct = { ...product };
  //   this.isEditing = true;
  //   this.editingProductId = product.productId;
  // }

  // updateProduct(): void {
  //   if (this.editingProductId !== null) {
  //     this.productService.editProduct(this.editingProductId, this.newProduct).subscribe(
  //       (product: Product) => {
  //         const index = this.products.findIndex(p => p.productId === this.editingProductId);
  //         if (index !== -1) {
  //           this.products[index] = product;
  //         }
  //         this.loadProducts(); // Refresh the list
  //         this.resetForm();
  //       },
  //       error => {
  //         console.error('Error updating product', error);
  //       }
  //     );
  //   }
  // }

  // deleteProduct(productId: number): void {
  //   this.productService.deleteProduct(productId).subscribe(
  //     () => {
  //       this.products = this.products.filter(p => p.productId !== productId);
  //       this.loadProducts(); // Refresh the list
  //     },
  //     error => {
  //       console.error('Error deleting product', error);
  //     }
  //   );
  // }

  resetForm(): void {
    this.newProduct = { productId: 0, productName: '', productCat: '' };
    this.isEditing = false;
    this.editingProductId = null;
  }
}







// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ProductService } from '../../services/product.service';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css']
// })

// export class ProductComponent implements OnInit {
//   displayedColumns: string[] = ['projectId', 'projectName', 'projectCat'];
//   dataSource: any[] = [];

//   constructor(private productService: ProductService) { }

//   ngOnInit(): void {
//     this.productService.GetProducts.subscribe(
//       data => {
//         this.dataSource = data;
//       },
//       err => {
//         alert("no data from api");
//         console.error(err);
//       }
//     );
//   }
// }
