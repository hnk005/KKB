import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {

  @Input() label : string = 'default';
  @Input() icon : string = 'pi pi-question';
  @Input() classStyle? : 'category';
  @Output() handleClick = new EventEmitter();
  constructor() {
  }

  onClick() {
    this.handleClick.emit()
  }
}
