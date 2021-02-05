import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
})
export class AppHighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
