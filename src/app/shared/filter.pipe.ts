import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const result: any = [];
    debugger;
    if (!value || filterString === '' || propName === '') {
      return value;
    }
    debugger;

    value.forEach((a: any) => {
      debugger;
      if (a[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(a)
      }
    });
    return result;
  }

}
