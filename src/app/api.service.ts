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
    const { appUrl } = environment;
    return this.http.get<Movie>(`${appUrl}/movies/${id}`);
  }

  getMovies() {
    const { appUrl } = environment;
    return this.http.get<Movie[]>(`${appUrl}/movies`);
  }
  getNewestMovies(){
    const { appUrl } = environment;
    return this.http.get<Movie[]>(`${appUrl}/movies?sortBy=_createdOn%20desc&distinct=category`)
 }
}
