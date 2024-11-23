import { Injectable } from '@angular/core';
import { Review } from '../models/review';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private mockReviews: Review[] = [
    {
      id: 1,
      book: 'The Great Gatsby',
      user: 'John Doe',
      rating: 4,
      date: '2024-03-15',
      comment: 'A masterpiece of American literature',
    },
    {
      id: 2,
      book: '1984',
      user: 'Jane Smith',
      rating: 5,
      date: '2024-03-14',
      comment: 'Prophetic and thought-provoking',
    },
    {
      id: 3,
      book: 'To Kill a Mockingbird',
      user: 'Bob Wilson',
      rating: 4,
      date: '2024-03-13',
      comment: 'A timeless classic',
    },
  ];

  getReviews(): Observable<Review[]> {
    return of(this.mockReviews).pipe(delay(800));
  }
}
