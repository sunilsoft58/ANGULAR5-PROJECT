import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHostlistener]'
})
export class HostlistenerDirective {
  
  @HostListener('mouseleave') onmouseleave() {
    this.changecolor("Blue")
  }
  @HostListener('mouseover') onmouseover() {
    this.changecolor("Red");
  }  
  @HostListener('click') clicked() {
    this.changecolor("Green");
  }
  changecolor(colorname: string): void {
    this.elementr.nativeElement.style.color = colorname;
  }  

  constructor(private elementr:ElementRef) { }

  
}
