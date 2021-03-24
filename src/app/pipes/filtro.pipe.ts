import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arr: any[], text:string): any[] {
    if(!arr) return [];
    if(!text) return arr;
    text=text.toLowerCase();
    
    return arr.filter (it=>{
    return it.name.toLowerCase().includes(text);
    });
   }
   }
   