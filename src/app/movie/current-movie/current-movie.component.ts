import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Movie } from 'src/app/types/movie';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-movie',
  templateUrl: './current-movie.component.html',
  styleUrls: ['./current-movie.component.css'],
})
export class CurrentMovieComponent implements OnInit {
  movie: Movie | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.fetchMovie();
  }

  fetchMovie(): void {
    const id = this.activatedRoute.snapshot.params['movieId'];

    this.apiService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
      console.log({ movie });
    });
  }
}