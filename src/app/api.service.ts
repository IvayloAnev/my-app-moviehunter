import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMovies() {
    const { appUrl } = environment;
    return this.http.get<Movie[]>(`${appUrl}/movies`);
  }
}
