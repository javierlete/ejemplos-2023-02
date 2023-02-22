import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCartel]'
})
export class CartelDirective {
  private nativo;
  private capa: any;

  @Input() set appCartel(valor: string) {
    this.capa = document.createElement('div');
    this.capa.innerText = valor;
    this.capa.style.position = 'absolute';
    this.capa.style.backgroundColor = 'white';
    this.capa.style.border = '1px solid black';
    this.capa.style.top = this.nativo.getBoundingClientRect().y;
    this.capa.style.left = this.nativo.getBoundingClientRect().x;
    this.capa.style.display = 'none';

    this.nativo.parentNode.insertBefore(this.capa, this.nativo.nextSibling);
  }

  constructor(private el: ElementRef) {
    this.nativo = this.el.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.capa.style.display = 'block';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.capa.style.display = 'none';
  }
}
