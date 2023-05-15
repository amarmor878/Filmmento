import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-similares-busqueda',
  templateUrl: './carousel-similares-busqueda.component.html',
  styleUrls: ['./carousel-similares-busqueda.component.css']
})
export class CarouselSimilaresBusquedaComponent implements OnInit {
  @Input() peliculas!: any[];
  @Input() detalles!: string[];
  @Input() tipoEntrada!: any;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  peliculasConDetalles: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.combineData();
  }

  combineData(): void {
    for (let i = 0; i < this.peliculas.length; i++) {
      const pelicula = this.peliculas[i];
      const detalle = this.detalles[i];
      const peliculaConDetalle = { ...pelicula, detalle, tipo: pelicula.tipo, id: pelicula.id };
      this.peliculasConDetalles.push(peliculaConDetalle);
    }
  }

  verDetalles(tipo: string, id: number) {
    if (this.tipoEntrada && id) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false; // Disable route reuse
      this.router.navigate(['/detalle-busqueda', this.tipoEntrada, id]);
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    dots: true, 
    navSpeed: 700,
    autoplay: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    },
    nav: true
  };
  
}
