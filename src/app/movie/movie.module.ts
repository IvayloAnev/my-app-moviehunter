import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { CurrentMovieComponent } from './current-movie/current-movie.component';
import { MovieRoutingModule } from './movie-rauting.module';



@NgModule({
  declarations: [
    NewMovieComponent,
    CurrentMovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
