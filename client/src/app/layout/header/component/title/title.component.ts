import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  title = 'KKB.Vn';

  constructor (public router : Router) {}

  goBackHome() {
    this.router.navigate(['/'])
  }
}
