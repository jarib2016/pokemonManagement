import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {

  constructor(private elt:ElementRef) {
    this.setHeight(180);
    this.setBorder(`#f5f5f5`);
  }

  @Input('pkmBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor|| 'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number){
    this.elt.nativeElement.style.height = `${height}px`;
  }
  setBorder(color: string){
    this.elt.nativeElement.style.border = `solid 4px ${color}`
  }
}
