import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
     /*this.renderer.setElementStyle(
      this.elementRef.nativeElement, 'background-color', 'yellow');*/
      this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this.renderer.setElementStyle(
     this.elementRef.nativeElement, 'background-color', 'blue');*/
    this.backgroundColor = 'white';
 }

 @HostBinding('style.backgroundColor') get setColor(){
  return this.backgroundColor;
 }

 private backgroundColor: string

  constructor(
    /*private elementRef: ElementRef,
    private renderer: Renderer2*/) {}

}
