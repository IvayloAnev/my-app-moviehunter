import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css'],
})
export class NewMovieComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  o$ = new Observable();

  newMovieSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    
    const { title,genre,imageUrl,release_year } = form.value;
    this.apiService.createMovie(title,genre,imageUrl,release_year).subscribe();
    this.router.navigate(['/movies'])
  }
}