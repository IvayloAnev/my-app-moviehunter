import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { CurrentMovieComponent } from './current-movie/current-movie.component';



@NgModule({
  declarations: [
    NewMovieComponent,
    CurrentMovieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MovieModule { }
