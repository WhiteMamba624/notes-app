import { NoteService } from './../services/note.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() selectedCategoryId: string;
  @Input() searchedTitle:string;
  notes: Note[];

  constructor(private noteService: NoteService) {
    //let service = new NoteService();
  }

  ngOnInit(): void {
     this.getNotes();
  }
  ngOnChanges(){
    console.warn(this.searchedTitle);
    if (this.selectedCategoryId) {
      this.noteService.getFilteredNotes(this.selectedCategoryId).subscribe((result)=>this.notes=result);
    }
    if(this.searchedTitle){
      this.noteService.getSearchedNotes(this.searchedTitle).subscribe((result)=>this.notes=result);
    }
    else
    {
      this.getNotes();
    }

  }
  delete(noteId : string ){
    this.noteService.deleteNote(noteId).subscribe(() => this.getNotes());
    console.log(this.delete);
  }
  getNotes(){
    this.noteService.getNotes().subscribe((result)=>this.notes=result);
  }
}

export interface Note {
  id: string;
  title: string;
  description: string;
  categoryId: string;
}
