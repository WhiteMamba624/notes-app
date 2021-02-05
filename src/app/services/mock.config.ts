import { HttpRequest, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import * as data from '../../assets/notes.json';
import { Note } from '../note/note.component';
 
let notes: any[] = (data as any).default;
 
const getNotes = (request: HttpRequest<any>) => {
  return of(
    new HttpResponse({
      status: 200,
      body: notes,
    })
  );
};
 
const getNote = (request: HttpRequest<any>) => {
  const id = extractIdPathParamFromUrl(request);
  const note = notes.find((c) => c.id === id);
 
  return of(new HttpResponse({ status: 200, body: note }));
};
 
const extractIdPathParamFromUrl = (request: HttpRequest<any>) => {
  const requestUrl = new URL(request.url);
  return requestUrl.pathname.split('/').pop();
};
 
const addNote = (request: HttpRequest<any>) => {
  const note = request.body as Note;
 
  notes.push(note);
 
  return of(new HttpResponse({ status: 200, body: note }));
};
 
const editNote = (request: HttpRequest<any>) => {
  const id = extractIdPathParamFromUrl(request);
  const noteIndex = notes.findIndex((c) => c.id === id);
  const note = request.body as Note;
 
  notes[noteIndex] = note;
 
  return of(
    new HttpResponse({
      status: 200,
      body: note,
    })
  );
};
 
const removeNote = (request: HttpRequest<any>) => {
  const id = extractIdPathParamFromUrl(request);
 
  notes = notes.filter((c) => c.id !== id);
 
  return of(
    new HttpResponse({
      status: 200,
    })
  );
};
 
export const selectHandler = (request: HttpRequest<any>) => {
  const requestUrl = new URL(request.url);
  const getOneRegexp: RegExp = new RegExp(`/notes/[0-9a-zA-Z]+`);
  switch (request.method) {
    case 'GET':
      const pathname = requestUrl.pathname;
      if (pathname === '/notes') {
        return getNotes;
      } else if (getOneRegexp.test(pathname)) {
        return getNote;
      } else {
        return null;
      }
    case 'POST':
      return addNote;
    case 'PUT':
      return editNote;
    case 'DELETE':
      return removeNote;
    default:
      return null;
  }
};
 
 

