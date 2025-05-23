import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele: ElementRef) { // Dependency Injection
    console.log(ele);                    // creating instance of ElementRef Class
  }
  @HostListener('mouseenter') 
  onMouseEnter() {
    this.highlight('yellow', 'red');
  }
  @HostListener('mouseleave') 
  onMouseLeave() {
    this.highlight('', '');
  }
  private highlight(bgColor: string, color: string) {
    this.ele.nativeElement.style.backgroundColor = bgColor;
    this.ele.nativeElement.style.color = color;
  }

}