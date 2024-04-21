import { Component, Input, SimpleChange, SimpleChanges, inject, signal } from '@angular/core';

import { ProductComponent } from '@domains/products/components/product/product.component';
import { Product } from '@core/models/product.model';
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@core/models/category.model';
import { RouterLinkWithHref } from '@angular/router';
import { BannerComponent } from "../../../../shared/components/banner/banner.component";

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref, BannerComponent]
})
export default class ListComponent {
  private cart = inject(CartService);
  public products = signal<Product[]>([]);
  public categories = signal<Category[]>([]);
  public productService = inject(ProductService);
  public categoryService = inject(CategoryService);

  @Input() category_id?: string;

  ngOnInit() {
    // this.getProducts();
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    // const category_id = changes['category_id'];
    // if (category_id) {
    this.getProducts();
    // }
  }

  public addToCart(product: Product) {
    this.cart.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts(this.category_id)
      .subscribe({
        next: (products) => {
          console.log(products)
          this.products.set(products);
        },
        error: () => {
        }
      })
  }

  private getCategories() {
    this.categoryService.getAllCategories()
      .subscribe({
        next: (data) => {
          console.log(data)
          this.categories.set(data);
        },
        error: () => {
        }
      })
  }

}
