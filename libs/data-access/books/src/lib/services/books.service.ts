import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private mockBooks: Book[] = [];

  getBooks(): Observable<Book[]> {
    return of(this.mockBooks).pipe(delay(800)); // Simulate network delay
  }
}
