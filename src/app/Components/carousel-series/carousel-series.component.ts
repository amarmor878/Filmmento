import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { forkJoin } from 'rxjs';
import { ApiTmdbSeriesService } from 'src/app/Services/api-tmdb-series.service';
import { faPlay, faInfo } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DialogTrailerComponent } from '../dialog-trailer/dialog-trailer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-series',
  templateUrl: './carousel-series.component.html',
  styleUrls: ['./carousel-series.component.css']
})
export class CarouselSeriesComponent {
  series!: any[];
  generos: any[] = [];
  faPlay = faPlay;
  faInfo = faInfo;
  currentPage = 1;

  constructor(private seriesServices: ApiTmdbSeriesService, public dialog: MatDialog, private router: Router) { }

  verDetalles(tipo: string, id: number) {
    this.router.navigate(['/detalle-busqueda', tipo, id]);
  }

  ngOnInit() {
    forkJoin([
      this.seriesServices.getSeriesTopRated(this.currentPage),
      this.seriesServices.getGenerosSerie()
    ]).subscribe(
      ([peliculasData, generosData]) => {
        this.series = peliculasData.results;
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

  reproducirTrailer(serie: any) {

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1700,
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
    nav: false,
    autoplay: true,
    autoplayTimeout: 8000,
    smartSpeed: 1000
  };
}
