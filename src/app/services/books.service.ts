import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  gelAllBooks(): Observable<any[]> {
    return this.http.get<any[]>('https://www.etnassoft.com/api/v1/get/?category=libros_programacion');
  }

  getBookById(bookId: number): Observable<any> {
    return this.http.get<any>(`https://www.etnassoft.com/api/v1/get/?id=${bookId}`);
  }
}
