import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { SeriesListComponent } from './Components/series-list/series-list.component';
import { DetalleBusquedaComponent } from './Components/detalle-busqueda/detalle-busqueda.component';
import { SearchDialogComponent } from './Components/search-dialog/search-dialog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta vacía que redirige a Home
  { path: 'home', component: HomeComponent }, // Ruta para el componente Home
  { path: 'movies', component: MovieListComponent }, // Ruta para el componente MovieList
  { path: 'series', component: SeriesListComponent }, // Ruta para el componente SeriesList
  { path: 'detalle-busqueda/:tipo/:id', component: DetalleBusquedaComponent }, //Ruta para el componente de Detalles
  { path: 'search', component: SearchDialogComponent } // Ruta para el componente SearchDialog
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
