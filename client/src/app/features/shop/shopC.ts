import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../shared/modules/product';
import { Shop } from '../../core/services/shop';
import { MatCard} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ProductItem } from "./product-item/product-item";
import { FiltersDialog } from './filters-dialog/filters-dialog';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatListOption, MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ShopParams } from '../../shared/modules/shopParams';
import { Pagination } from '../../shared/modules/pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop',
  imports: [
    ProductItem,
    MatButton,
    MatIcon,
    MatMenuModule,
    MatMenuTrigger,
    MatSelectionList,
    MatListOption,
    MatPaginator,
    FormsModule
  ],
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class ShopC implements OnInit {
handlePageChange($event: PageEvent) {
throw new Error('Method not implemented.');
}
// Removed duplicate onSortChange method
sortMenu(): import("@angular/material/menu").MatMenuPanel<any>|null {
throw new Error('Method not implemented.');
}

  private shopService=inject(Shop);
  private dialogService = inject(MatDialog);

  protected title = 'Ecommerce';

  products?: Pagination<Product>;

  sortOptions= [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},  
    {name: 'Price: High to Low', value: 'priceDesc'}
  ];
  shopParams = new ShopParams();
  PageSizeOptions = [5, 10, 15, 20];

  trackById(index: number, item: Product) {
    return item.id;
  }

  ngOnInit(): void {
    this.initializeShop();
    }
    
    initializeShop() {
    this.shopService.getBrands();
    this.shopService.getTypes();
    this.getProducts();    
}

getProducts() {
  this.shopService.getProducts(this.shopParams).subscribe({
    next: (response: Pagination<Product>) => this.products = response,
    error: (error: any) => console.log(error),
  })
}

onSearchChange() {
  this.shopParams.pageNumber = 1; // Reset to first page on search
  this.getProducts();
}

handlePageEvent(event: PageEvent) {
  this.shopParams.pageNumber = event.pageIndex + 1;
  this.shopParams.pageSize = event.pageSize;
  this.getProducts();
}

onSortChange(event: MatSelectionListChange) {
  const selectedOption = event.options[0].value;
  if (selectedOption) {
    this.shopParams.sort = selectedOption.value;
    this.shopParams.pageNumber = 1; // Reset to first page on sort change
    this.getProducts();
    // You may want to re-fetch sorted products here
  }
}

openFiltersDialog() {
  const dialogRef = this.dialogService.open(FiltersDialog, {
    width: '500px',
    data: {
      selectedBrands: this.shopParams.brands,
      selectedTypes: this.shopParams.types,
    }
  });

  dialogRef.afterClosed().subscribe({
    next: (result) => {
      if (result) {
        this.shopParams.brands = result.brands;
        this.shopParams.types = result.types;
        this.shopParams.pageNumber = 1; // Reset to first page on filter change
        this.getProducts();
      }
    }
  });
}
}