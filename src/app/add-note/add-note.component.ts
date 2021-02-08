import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { FilterService } from '../services/filter.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  title: string;
  description: string;
  categories:Category[];
  idCategoryNote:string;
  constructor(private filterService:FilterService,private noteService:NoteService,private router: Router) { }

  ngOnInit(): void {
    console.warn();
    this.categories=this.filterService.getFilters();
    
  }

  add() {
    this.noteService.addNote(this.title,this.description,this.idCategoryNote);
    this.router.navigateByUrl('');
  }


}
