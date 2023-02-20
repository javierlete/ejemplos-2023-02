import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-labelinput',
    template: `
        <div>
            <label for="{{id}}">{{etiqueta}}</label>
            <input #cuadro type="{{tipo}}"
                value="{{dato}}" (input)="cambio(cuadro.value)" id="{{id}}" name="{{id}}">
        </div>
        `
})
export class LabelinputComponent {
    @Input() id!: string;
    @Input() etiqueta: string = 'ETIQUETA';
    @Input() tipo: string = 'text';
    
    @Input() dato: any;
    @Output() datoChange = new EventEmitter<any>();

    cambio(valor: any): void {
        console.log('LABELINPUT', valor);
        this.datoChange.emit(valor);
    }
}