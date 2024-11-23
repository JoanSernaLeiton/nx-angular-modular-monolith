import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

private mockAuthors: Author[] = [
    {
      id: 1,
      name: 'F. Scott Fitzgerald',
      books: 4,
      avgRating: 4.5,
      biography: 'American novelist and short story writer'
    },
    {
      id: 2,
      name: 'George Orwell',
      books: 6,
      avgRating: 4.6,
      biography: 'English novelist and essayist'
    },
    {
      id: 3,
      name: 'Harper Lee',
      books: 2,
      avgRating: 4.7,
      biography: 'American novelist'
    }
  ];

  getAuthors(): Observable<Author[]> {
    return of(this.mockAuthors).pipe(delay(800));
  }
}
