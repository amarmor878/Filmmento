import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

//Componentes de Angular - Filmmento
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { SeriesListComponent } from './Components/series-list/series-list.component';
import { PeliculasPopularesCarouselComponent } from './Components/peliculas-populares-carousel/peliculas-populares-carousel.component';
import { PeliculasMejoresCarouselComponent } from './Components/peliculas-mejores-carousel/peliculas-mejores-carousel.component';
import { SeriesPopularesCarouselComponent } from './Components/series-populares-carousel/series-populares-carousel.component';
import { SeriesMejoresCarouselComponent } from './Components/series-mejores-carousel/series-mejores-carousel.component';
import { DialogTrailerComponent } from './Components/dialog-trailer/dialog-trailer.component';
import { CarouselSeriesComponent } from './Components/carousel-series/carousel-series.component';
import { DetalleBusquedaComponent } from './Components/detalle-busqueda/detalle-busqueda.component';
import { SearchDialogComponent } from './Components/search-dialog/search-dialog.component';

//Dependencias necesarias
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    MovieListComponent,
    SeriesListComponent,
    PeliculasPopularesCarouselComponent,
    PeliculasMejoresCarouselComponent,
    SeriesPopularesCarouselComponent,
    SeriesMejoresCarouselComponent,
    DialogTrailerComponent,
    HomeComponent,
    CarouselSeriesComponent,
    DetalleBusquedaComponent,
    SearchDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    CarouselModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
