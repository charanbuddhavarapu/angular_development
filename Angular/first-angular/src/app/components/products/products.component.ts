import { Component } from '@angular/core';
import productData from './products_data';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import {faStar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-products',
  imports: [
    NgxPaginationModule,FormsModule
  ],
  standalone:true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
//so when ever we sort some data, we then reassign it to filtered data, even if the search term is '', then filtered data will have all the entries
// So, when a search term is entered then sorted data wont change, first we get the filtered data,
// then when we apply sort, the sorting will also be done on filtered data only
//
export class ProductsComponent {
  productsArr = productData;                         //  Base array
  sortedProductArray = [...this.productsArr];        // To store sorted array - Sorted array, shallowcopy so that we can allow changes on this without the base array getting affected
  filteredArray = [...this.productsArr];             // Filtered version that we show on the UI

  p: number = 1;
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';
  faStar = faStar;

  // Called on every search input change
  getfilteredProducts() {
    this.filteredArray = this.sortedProductArray.filter(product =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Called when sort button is clicked
  sortProducts = (order: 'asc' | 'desc') => {
    this.sortOrder = order;
    console.log("Sorting in order:", order);

    const sorted = [...this.filteredArray]; // we use this to Sort only filtered products
    sorted.sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );

    this.sortedProductArray = sorted;
    this.getfilteredProducts();  // we do this inorder to refilter the data
  };
}
