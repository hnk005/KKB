import { Directive, ElementRef, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mousedown',['$event'])
  onClick(event: Event) {
    if(!this.el.nativeElement.contains(event.target)) {
      this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');
    }
    console.log(event)
  }
  

}
