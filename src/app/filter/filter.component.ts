import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() emitSelectedFilter = new EventEmitter<string>();

  categories: Category[] = [
    { name: 'To Do', id: '1' },
    { name: 'Done', id: '2' },
    { name: 'Doing', id: '3' },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectFilter(categoryId:string){
    this.emitSelectedFilter.emit(categoryId);
  }
}
