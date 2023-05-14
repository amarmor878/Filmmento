import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiTmdbSeriesService } from 'src/app/Services/api-tmdb-series.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-series-mejores-carousel',
  templateUrl: './series-mejores-carousel.component.html',
  styleUrls: ['./series-mejores-carousel.component.css']
})
export class SeriesMejoresCarouselComponent {
  series: any[] = [];
  generos: any[] = [];
  faPlay = faPlay;
  currentPage = 1;

  constructor(private seriesService: ApiTmdbSeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeriesTopRated(this.currentPage).subscribe(seriesData => {
      this.series = seriesData.results;
    });
    this.seriesService.getGenerosSerie().subscribe(generosData => {
      this.generos = generosData.genres;
    });
  }

  getGeneroById(id: number) {
    const genero = this.generos.find(g => g.id === id);
    return genero ? genero.name : '';
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true, // Agregado para que el carousel siempre esté en movimiento
    autoplayHoverPause: true, // Agregado para detener el movimiento al pasar el mouse sobre él
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
        items: 4
      },
      1140: {
        items: 5
      }
    },
    nav: false
  };
}
