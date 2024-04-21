import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { Product } from '@core/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive, BannerComponent]
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
