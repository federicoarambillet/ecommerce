import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@core/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { single } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private productService = inject(ProductService);
  private cart = inject(CartService);
  cover = signal('');

  @Input() id?: string;
  product = signal<Product | undefined>(undefined);

  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id)
        .subscribe({
          next: (product) => {
            // console.log(product)
            this.product.set(product);
            if (product.images.length > 0) {
              this.cover.set(product.images[0]);
            }
          }
        })
    }
  }

  addToCart() {
    const product = this.product()
    if (product) {
      this.cart.addToCart(product);
    }
  }

  changeImage(newImg: string) {
    this.cover.set(newImg)
  }
}
