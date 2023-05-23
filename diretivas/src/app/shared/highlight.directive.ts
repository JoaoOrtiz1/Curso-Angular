import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highLightColor;
 }

 @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
}

@HostBinding('style.backgroundColor') get setColor(){
 return this.backgroundColor;
}

@Input() defaultColor:string = 'white';
@Input() highLightColor:string = 'yellow';

private backgroundColor: string

 constructor() {}

 ngOnInit(){
  this.backgroundColor = this.defaultColor;
 }
  

}
