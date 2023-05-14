import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiTmdbBusquedaService } from 'src/app/Services/api-tmdb-busqueda.service';

@Component({
  selector: 'app-detalle-busqueda',
  templateUrl: './detalle-busqueda.component.html',
  styleUrls: ['./detalle-busqueda.component.css']
})
export class DetalleBusquedaComponent {
  detalle!: any;
  generos: any[] = [];
  tipo: string = '';
  esPelicula: boolean = false;
  esSerie: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiTmdbBusquedaService: ApiTmdbBusquedaService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tipo = params['tipo'];
      this.apiTmdbBusquedaService.getBusquedaGlobalPorTipo(params['tipo'], params['id']).subscribe(data => {
        this.detalle = data;
        if (this.tipo === 'movie') {
          this.esPelicula = true;
        } else {
          this.esSerie = true;
        }
      });
    });
  }

  getGeneros() {
    return this.detalle.genres.map((genero: { name: any; }) => genero.name).join(', ');
  }

  getBackdropPath(): string {
    return this.detalle?.backdrop_path ?
      `https://image.tmdb.org/t/p/w1280${this.detalle.backdrop_path}` :
      '/assets/img/no-image.jpg';
  }

  getTrailer() {
    return `https://www.youtube.com/embed/${this.detalle.videos.results[0].key}`;
  }

  getPoster() {
    return `https://image.tmdb.org/t/p/original/${this.detalle.poster_path}`;

  }

  backdrop = {
    'background-image': this.getBackdropPath()
  };
}
