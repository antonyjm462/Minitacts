import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(itemList: any, searchKeyword: string) {
    if (!itemList)
      return [];
    if (!searchKeyword)
      return itemList;
    let filteredList = [];
    if (itemList.length > 0) {
      searchKeyword = searchKeyword.toLowerCase();
      itemList.forEach(item => {
            if (Object.values(item.data)[0].toString().toLowerCase().indexOf(searchKeyword) > -1) {
              filteredList.push(item);
            }
      });
    }
    return filteredList;
  }
}