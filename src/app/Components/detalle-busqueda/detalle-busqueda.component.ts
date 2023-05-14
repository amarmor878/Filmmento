import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiTmdbBusquedaService } from 'src/app/Services/api-tmdb-busqueda.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importa SafeResourceUrl y DomSanitizer

@Component({
  selector: 'app-detalle-busqueda',
  templateUrl: './detalle-busqueda.component.html',
  styleUrls: ['./detalle-busqueda.component.css']
})
export class DetalleBusquedaComponent implements OnInit {
  detalle!: any;
  generos: any[] = [];
  tipo: string = '';
  esPelicula: boolean = false;
  esSerie: boolean = false;
  backdrop!: any;
  trailerUrl: SafeResourceUrl = '';

  constructor(private route: ActivatedRoute, private apiTmdbBusquedaService: ApiTmdbBusquedaService, private sanitizer: DomSanitizer) { }

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

    this.route.params.subscribe(params => {
      this.apiTmdbBusquedaService.getBusquedaPorTrailer(params['tipo'], params['id']).subscribe(data => {
        this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.results[0].key);
      });
    })
  }

  getGeneros() {
    return this.detalle.genres.map((genero: { name: any; }) => genero.name).join(', ');
  }

  getBackdropPath(): string {
    const backdropPath = this.detalle?.backdrop_path;
    const backgroundImage = `url('https://image.tmdb.org/t/p/w1280${backdropPath}')`
    return backgroundImage;
  }

  getTrailer() {
    return this.trailerUrl;
  }

  getPoster() {
    return this.detalle?.poster_path ? `https://image.tmdb.org/t/p/original/${this.detalle.poster_path}` : '/assets/img/no-image.jpg';
  }

}
