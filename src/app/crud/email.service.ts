import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { Email } from './email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  create(email: Email): Observable<Email> {
    return this.httpClient
      .post<Email>(
        this.apiServer + '/email-list/',
        JSON.stringify(email),
        this.httpOptions
      )
      .pipe(
        catchError((error) => {
          throw new Error(error.message);
        })
      );
  }
  getById(id: number): Observable<Email> {
    return this.httpClient
      .get<Email>(this.apiServer + id, this.httpOptions)
      .pipe(
        catchError((error) => {
          throw new Error(error.message);
        })
      );
  }
  getAll(): Observable<Email[]> {
    return this.httpClient.get<Email[]>(this.apiServer).pipe(
      catchError((error) => {
        throw new Error(error.message);
      })
    );
  }
  update(email: Email): Observable<Email> {
    return this.httpClient
      .post<Email>(
        this.apiServer + 'update',
        JSON.stringify(email),
        this.httpOptions
      )
      .pipe(
        catchError((error) => {
          throw new Error(error.message);
        })
      );
  }

  constructor(private httpClient: HttpClient) {}
}
