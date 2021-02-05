import { Injectable } from '@angular/core';
import { Category } from '../category';

@Injectable()
export class FilterService{
categories: Category[] = [
  { name: 'To Do', id: '1' },
  { name: 'Done', id: '2' },
  { name: 'Doing', id: '3' },
];

constructor() { }

getFilters(): Category[] {
  return this.categories;
}
}
