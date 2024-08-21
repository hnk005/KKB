import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-cart',
  templateUrl: './icon-cart.component.html',
  styleUrl: './icon-cart.component.scss'
})
export class IconCartComponent {
  @Input() style = '';
}
