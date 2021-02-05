import { NoteService } from './../services/note.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() selectedCategoryId: string;
  notes: Note[];

  constructor(private noteService: NoteService) {
    //let service = new NoteService();
  }

  ngOnInit(): void {
     this.noteService.getNotes().subscribe((result)=>this.notes=result);
  }
  ngOnChanges(){
    if (this.selectedCategoryId) {
      this.noteService.getFilteredNotes(this.selectedCategoryId).subscribe((result)=>this.notes=result);
    }

  }
}

export interface Note {
  id: string;
  title: string;
  description: string;
  categoryId: string;
}
