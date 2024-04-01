import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) img: string = "https://picsum.photos/250/250";
  @Input({required:true}) title: string = "";
  @Input({required:true}) price: number = 0;
}
