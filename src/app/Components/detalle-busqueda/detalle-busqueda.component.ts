import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiTmdbBusquedaService } from 'src/app/Services/api-tmdb-busqueda.service';

@Component({
  selector: 'app-detalle-busqueda',
  templateUrl: './detalle-busqueda.component.html',
  styleUrls: ['./detalle-busqueda.component.css']
})
export class DetalleBusquedaComponent {
  detalle: any;
  tipo: string = '';
  esPelicula: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiTmdbBusquedaService: ApiTmdbBusquedaService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tipo = params['tipo'];
      if (this.tipo === 'movie') {
        this.esPelicula = true;
      }
      this.apiTmdbBusquedaService.getBusquedaGlobalPorTipo(this.tipo, params['id'])
        .subscribe(detalle => {
          this.detalle = detalle;
        });
    });
  }
}
