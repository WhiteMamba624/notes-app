import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  title: string = 'Add note';
  titleColor: string = 'red';
  noteContent: string = '';
  testValue: boolean = true;

  array = ['first', 'second'];

  constructor() { }

  ngOnInit(): void {
  }

  setTitle() {
    this.title = 'test event binding';
  }

  setValue(): boolean {
    return true;
  }
}
