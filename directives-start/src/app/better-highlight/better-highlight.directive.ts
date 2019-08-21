import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input('appBetterHighlight') defaultColor:string = "transparent";
  @Input() highlightedColor: string = "blue";

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.bgColor = this.defaultColor;
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostBinding('style.backgroundColor') bgColor:string;

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.bgColor = this.highlightedColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.bgColor = this.defaultColor;
  }

}
