import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextcolor]'
})
export class TextcolorDirective {

  constructor(private elementr: ElementRef) {
    this.elementr.nativeElement.style.color='Red';
    this.elementr.nativeElement.style.fontSize='40px';
    this.elementr.nativeElement.style.backgroundColor ='green';
   }

}
