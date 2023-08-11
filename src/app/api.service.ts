import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/types/movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMovie(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Movie>(`${apiUrl}/movies/${id}`);
  }

  getMovies() {
    const { apiUrl } = environment;
    return this.http.get<Movie[]>(`${apiUrl}/movies`);
  }
  getNewestMovies(){
    const { apiUrl } = environment;
    return this.http.get<Movie[]>(`${apiUrl}/movies?sortBy=_createdOn%20desc`)
 }
}
