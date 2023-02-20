import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-titulo',
    template: `
        <h1 [style.color]="color">
            <img src="{{imagen}}" alt="">
            {{texto}}
            <img [src]="imagen">
        </h1>`,
    styles: ['h1 { font-family: sans-serif; }']
})
export class TituloComponent {
    @Input() texto: string = 'Mi título';
    @Input() color: string = 'black';
    @Input() imagen: string = '';
}