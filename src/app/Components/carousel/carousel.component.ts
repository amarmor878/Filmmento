import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { forkJoin } from 'rxjs';
import { ApiTmdbPeliculasService } from 'src/app/Services/api-tmdb-peliculas.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DialogTrailerComponent } from '../dialog-trailer/dialog-trailer.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  peliculas!: any[];
  generos: any[] = [];
  faPlay = faPlay;
  currentPage = 1;

  constructor(private peliculasService: ApiTmdbPeliculasService, public dialog: MatDialog) { }

  ngOnInit() {
    forkJoin([
      this.peliculasService.getPeliculasUltimosLanzamientos(this.currentPage),
      this.peliculasService.getGenerosPeliculas()
    ]).subscribe(
      ([peliculasData, generosData]) => {
        this.peliculas = peliculasData.results;
        this.generos = generosData.genres;
      },
      error => {
        console.log(error);
      }
    );
  }

  getGeneroById(id: number) {
    const genero = this.generos.find(g => g.id === id);
    return genero ? genero.name : '';
  }

  reproducirTrailer(pelicula: any) {

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
}
