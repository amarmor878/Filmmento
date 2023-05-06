import { Component, OnInit } from '@angular/core';
import { ApiTmdbPeliculasService } from 'src/app/Services/api-tmdb-peliculas.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  peliculas: any[] = [];
  generos: any[] = [];
  faPlay = faPlay;
  selectedOption = 'ultima';
  page = 1;

  constructor(private peliculasService: ApiTmdbPeliculasService) { }

  ngOnInit(): void {
    this.mostrarPeliculas();
  }

  mostrarPeliculas(): void {
    if (this.selectedOption == 'popular') {
      this.peliculasService.getPeliculasPopulares(this.page).subscribe((data: any) => {
        this.peliculas = data.results;
      });
    } else if (this.selectedOption == 'top-rated') {
      this.peliculasService.getPeliculasTopRated(this.page).subscribe((data: any) => {
        this.peliculas = data.results;
      });
    } else {
      this.peliculasService.getPeliculasUltimosLanzamientos(this.page).subscribe((data: any) => {
        this.peliculas = data.results;
      });
    }
  }

  mostrarMasPeliculas(): void {
    this.page += 1;
    if (this.selectedOption == 'popular') {
      this.peliculasService.getPeliculasPopulares(this.page).subscribe((data: any) => {
        this.peliculas = [...this.peliculas, ...data.results];
      });
    } else if (this.selectedOption == 'top-rated') {
      this.peliculasService.getPeliculasTopRated(this.page).subscribe((data: any) => {
        this.peliculas = [...this.peliculas, ...data.results];
      });
    } else {
      this.peliculasService.getPeliculasUltimosLanzamientos(this.page).subscribe((data: any) => {
        this.peliculas = [...this.peliculas, ...data.results];
      });
    }
  }

  seleccionarOpcion(opcion: string): void {
    this.selectedOption = opcion;
    this.page = 1;
    this.peliculas = [];
    this.mostrarPeliculas();
  }
}
