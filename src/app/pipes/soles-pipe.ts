import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soles'
})
export class SolesPipe implements PipeTransform {

   transform(value: number | string | null | undefined): string {
    if (value === null || value === undefined) {
      return 'S/ 0.00'; // o ''
    }

    const num = Number(value);
    if (isNaN(num)) return String(value);

    return `S/ ${num.toFixed(2)}`;
  }
}
