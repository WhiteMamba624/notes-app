import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note/note.component';
import { map } from "rxjs/operators";


@Injectable()
export class NoteService {
  readonly baseUrl = "https://localhost:4200";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  serviceCall() {
    console.log("Note service was called");
  }

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.baseUrl + `/notes`, this.httpOptions);
  }

  getFilteredNotes(categoryId: string): Observable<Note[]> {
    // return this.notes.filter(notes =>notes.categoryId===categoryId);
    return this.httpClient.get<Note[]>(this.baseUrl + '/notes', this.httpOptions).pipe(map((notes) => notes.filter((note) => note.categoryId === categoryId))
    );
  }
  getSearchedNotes(title: string): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
    .pipe(map((notes) => notes.filter((note) => note.title.toLocaleLowerCase().includes(title) ))
    );
  }
  addNote(noteTitle: string, noteDescription: string, noteCategoryId: string) {
    let note = {
      description: noteDescription,
      title: noteTitle,
      categoryId: noteCategoryId
    }
    return this.httpClient.post(this.baseUrl + "/note", note, this.httpOptions).subscribe();
  }

  deleteNote( id: string) {
    return this.httpClient.delete<Note>(this.baseUrl+'/note/' + id , this.httpOptions);
    }


}
