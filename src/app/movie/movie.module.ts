import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { CurrentMovieComponent } from './current-movie/current-movie.component';
import { MovieRoutingModule } from './movie-rauting.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewMovieComponent,
    CurrentMovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule
  ]
})
export class MovieModule { }
