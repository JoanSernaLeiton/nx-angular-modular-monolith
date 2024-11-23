import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signIn(
    email: string,
    password: string
  ): Observable<{ email: string; password: string }> {
    return of({
      email,
      password,
    });
  }
}
