import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@core/models/product.model';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe, ReversePipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  // styleUrl: './product.component.css'
})

export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
