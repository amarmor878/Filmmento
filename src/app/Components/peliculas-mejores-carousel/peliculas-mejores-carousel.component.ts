import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiTmdbPeliculasService } from 'src/app/Services/api-tmdb-peliculas.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-peliculas-mejores-carousel',
  templateUrl: './peliculas-mejores-carousel.component.html',
  styleUrls: ['./peliculas-mejores-carousel.component.css']
})
export class PeliculasMejoresCarouselComponent {
  peliculas: any[] = [];
  generos: any[] = [];
  faPlay = faPlay;
  currentPage = 1;

  constructor(private peliculasService: ApiTmdbPeliculasService) { }
  
  ngOnInit(): void {
    this.peliculasService.getPeliculasTopRated(this.currentPage).subscribe(peliculasData => {
      this.peliculas = peliculasData.results;
    });

    this.peliculasService.getGenerosPeliculas().subscribe(generosData => {
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
