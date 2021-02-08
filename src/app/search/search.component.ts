import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() emitSearchedTitle = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  searchedTitle(title:string){
    console.warn("first step");
    this.emitSearchedTitle.emit(title);
    console.warn("second step"+title);
  }
}
