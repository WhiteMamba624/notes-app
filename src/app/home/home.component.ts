import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
selectedCategoryId:string;
searchedTitle:string;
  constructor() { }

  ngOnInit(): void {
  }

  receiveCategory(categoryId: string) {
    this.selectedCategoryId = categoryId;
    console.log(categoryId);
  }
  receiveTitle(title:string){
    this.searchedTitle=title;
    console.log(title);
  }

}
