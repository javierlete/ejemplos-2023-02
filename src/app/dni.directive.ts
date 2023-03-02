import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function dniValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const dni = control.value;
        
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

        const numero: number = Number(dni.substring(0,8).replace('X', '0').replace('Y', '1').replace('Z', '2'));
        const letra = dni[8];
        const letraCalculada = letras[numero % 23];

        const forbidden = letra !== letraCalculada;
        
        return forbidden ? {dni: {value: dni}} : null;
    };
}
