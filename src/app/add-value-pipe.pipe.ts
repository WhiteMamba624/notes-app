import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addValuePipe'
})
export class AddValuePipePipe implements PipeTransform {

  transform(value: number, addedValue?: number): number {
    return isNaN(addedValue) ? value : value + addedValue;
  }

}
