import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { CurrentMovieComponent } from './current-movie/current-movie.component';

const routes: Routes = [
  {
    path: 'movies',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
      },
      {
        path: ':movieId',
        component: CurrentMovieComponent,
      },
    ],
  },
  {
    path: 'add-movie',
    component: NewMovieComponent,
    canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule { }