import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]',
  standalone: true
})
export class NextDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  nextFunc(){
    debugger;
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName("columns");
    elm.append(item[0]);
  }

}
