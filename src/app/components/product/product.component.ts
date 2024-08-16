import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  displayedColumns: string[] = ['productId', 'productName', 'productCat'];
  dataSource: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: any[]) => {
        this.products = data;
        this.dataSource = this.products; // Set data source for the table
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
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
