
import { Component } from '@angular/core';
import { CounterComponent } from '@shared/components/counter/counter.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
