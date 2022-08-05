import { Pipe, PipeTransform } from '@angular/core';
import { Album } from '../interfaces/interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: Album[], texto: string = '', columna: string = ''): Album[] {
    if (texto === '') {
      return arreglo;
    }

    if (!arreglo) {
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter(item => item[columna].toLowerCase().includes(texto));
  }

}
