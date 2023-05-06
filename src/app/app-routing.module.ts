import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { SeriesListComponent } from './Components/series-list/series-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta vacía que redirige a home
  { path: 'home', component: HomeComponent }, // Ruta para el componente Home
  { path: 'movies', component: MovieListComponent }, // Ruta para el componente MovieList
  { path: 'series', component: SeriesListComponent }, // Ruta para el componente SeriesList
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
