import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from 'src/types/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];

  constructor(private apiService: ApiService) {}

   ngOnInit(): void {
    this.apiService.getMovies().subscribe({
      next: (movies) => {
        this.movieList = movies;
        //console.log(movies);
        //this.isLoading = false;
      },
      error: (err) => {
        //this.isLoading = false;
        console.error(`Error: ${err}`);
      },
    });
  }
}
