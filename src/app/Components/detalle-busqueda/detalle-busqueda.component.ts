import { DialogTrailerComponent } from '../dialog-trailer/dialog-trailer.component';
import { ApiTmdbBusquedaService } from 'src/app/Services/api-tmdb-busqueda.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-busqueda',
  templateUrl: './detalle-busqueda.component.html',
  styleUrls: ['./detalle-busqueda.component.css']
})
export class DetalleBusquedaComponent implements OnInit {
  faHeart = faHeart;
  faPlay = faPlay;
  detalle: any;
  generos: any[] = [];
  reparto: any[] = [];
  tipo = '';
  esPelicula = false;
  esSerie = false;
  trailerUrl: SafeResourceUrl = '';
  logoUrl = '';
  modalOpen = false;
  selectedTab = 'similares';

  constructor(
    private route: ActivatedRoute,
    private apiTmdbBusquedaService: ApiTmdbBusquedaService,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ tipo, id }) => {
      this.tipo = tipo;
      this.getBusquedaGlobalPorTipo(tipo, id);
    });
  }

  getBusquedaGlobalPorTipo(tipo: string, id: string): void {
    this.apiTmdbBusquedaService.getBusquedaGlobalPorTipo(tipo, id).subscribe((data) => {
      this.detalle = data;
      this.generos = data.genres;
      this.logoUrl = data.logo_path;
      this.esPelicula = tipo === 'movie';
      this.esSerie = tipo === 'tv';
      this.trailerUrl = this.getSafeYoutubeUrl(data.trailer_key);
      this.getLogo(tipo, id);
    });
    this.apiTmdbBusquedaService.getBusquedaCreditos(tipo, id).subscribe(({ cast }) => {
      this.reparto = cast.slice(0, 6);
    });
  }

  getDuracionFormateada(): string {
    const { runtime } = this.detalle;
    const horas = Math.floor(runtime / 60);
    const minutosRestantes = runtime % 60;
    return `${horas}h ${minutosRestantes}min`;
  }

  private getLogo(tipo: string, id: string): void {
    this.apiTmdbBusquedaService.getImagenes(tipo, id).subscribe(({ logos }) => {
      const logo = logos[logos.length - 1].file_path;
      this.logoUrl = `https://image.tmdb.org/t/p/w500${logo}`;
    });
  }

  getBackdropPath(): string {
    const { backdrop_path } = this.detalle || {};
    return `url('https://image.tmdb.org/t/p/w1280/${backdrop_path}')`;
  }

  openTrailerModal(): void {
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
    const currentPosition = this.viewportScroller.getScrollPosition();
    this.viewportScroller.scrollToPosition([0, 0]);
    this.apiTmdbBusquedaService.getBusquedaPorTrailer(this.tipo, this.detalle.id).subscribe(({ results }) => {
      const key = results[0]?.key;
      const trailerUrl = this.getSafeYoutubeUrl(key);
      const dialogConfig: MatDialogConfig = {
        width: '75%',
        height: '75%',
        position: { top: '50%', left: '50%' },
        panelClass: 'custom-modal',
        data: { trailerUrl }
      };
      const dialogRef = this.dialog.open(DialogTrailerComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(() => {
        this.modalOpen = false;
        document.body.style.overflow = 'auto';
        this.viewportScroller.scrollToPosition(currentPosition);
      });
    });
  }

  private getSafeYoutubeUrl(key: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${key}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}