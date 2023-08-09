import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-movie-newest',
  templateUrl: './movie-newest.component.html',
  styleUrls: ['./movie-newest.component.css']
})
export class MovieNewestComponent implements OnInit {
  movieNewest: Movie[] = [];

  constructor(private apiService: ApiService) {}

   ngOnInit(): void {
    this.apiService.getNewestMovies().subscribe({
      next: (movies) => {
        this.movieNewest = movies.slice(0,3);
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
