import { Component, OnInit } from '@angular/core';
import { ApiTmdbPeliculasService } from 'src/app/Services/api-tmdb-peliculas.service';
import { faPlay, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  peliculas: any[] = [];
  generos: any[] = [];
  faPlay = faPlay;
  faInfo = faInfo;
  selectedOption = 'ultima';
  page = 1;

  constructor(private peliculasService: ApiTmdbPeliculasService, private router: Router) { }

  ngOnInit(): void {
    this.mostrarPeliculas();
  }

  verDetalles(tipo: string, id: number) {
    this.router.navigate(['/detalle-busqueda', tipo, id]);
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
