import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeArray'
})
export class ObjetoArrayPipe implements PipeTransform {

  transform = (objects: any = []) => {
    return Object.values(objects);
  }

}
