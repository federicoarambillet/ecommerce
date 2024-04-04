import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { Product } from '@core/models/product.model';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private cartService = inject(CartService);

  cart = this.cartService.cart
  total = this.cartService.total;

  hideSideMenu = signal(true);

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

}
