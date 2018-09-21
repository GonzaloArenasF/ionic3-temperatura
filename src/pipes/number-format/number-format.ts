import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipes
 */
@Pipe({
  name: 'numberFormat',
})
export class NumberFormatPipe implements PipeTransform {

  /**
   * Cambia los puntos por comas
   */
  transform(value: string, ...args) {
    return value.toString().split('.').join(',');
  }

}
