import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-user',
  templateUrl: './icon-user.component.html',
  styleUrl: './icon-user.component.scss'
})
export class IconUserComponent {
  @Input() style = '';
}
