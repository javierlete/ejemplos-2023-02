import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iva'
})
export class IvaPipe implements PipeTransform {

  transform(valor: number, ...args: any[]): number {
    let resultado = valor * 0.21;

    if(args[0]) {
      resultado += valor;
    }
    return resultado;
  }

}
