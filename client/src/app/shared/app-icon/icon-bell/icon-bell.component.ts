import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-bell',
  templateUrl: './icon-bell.component.html',
  styleUrl: './icon-bell.component.scss'
})
export class IconBellComponent {
  @Input() style = '';
}
