import { ApiTmdbPeliculasService } from 'src/app/Services/api-tmdb-peliculas.service';
import { DialogTrailerComponent } from '../dialog-trailer/dialog-trailer.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { faPlay, faInfo } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  modalOpen = false;

  constructor(
    private peliculasService: ApiTmdbPeliculasService,
    private router: Router,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.mostrarPeliculas();
  }

  verDetalles(tipo: string, id: number) {
    this.router.navigate(['/detalle-busqueda', tipo, id]);
  }

  openTrailerModal(movieId: number): void {
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
    const currentPosition = this.viewportScroller.getScrollPosition();
    this.viewportScroller.scrollToPosition([0, 0]);
    this.peliculasService.getPeliculasTrailer(movieId).subscribe((data: any) => {
      const key = data.results[0].key;
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

  mostrarPeliculas(): void {
    const fetchPeliculas = this.selectedOption === 'popular'
      ? this.peliculasService.getPeliculasPopulares(this.page)
      : this.selectedOption === 'top-rated'
        ? this.peliculasService.getPeliculasTopRated(this.page)
        : this.peliculasService.getPeliculasUltimosLanzamientos(this.page);

    fetchPeliculas.subscribe((data: any) => {
      this.peliculas = data.results;
    });
  }

  mostrarMasPeliculas(): void {
    this.page += 1;
    const fetchPeliculas = this.selectedOption === 'popular'
      ? this.peliculasService.getPeliculasPopulares(this.page)
      : this.selectedOption === 'top-rated'
        ? this.peliculasService.getPeliculasTopRated(this.page)
        : this.peliculasService.getPeliculasUltimosLanzamientos(this.page);

    fetchPeliculas.subscribe((data: any) => {
      this.peliculas = [...this.peliculas, ...data.results];
    });
  }

  seleccionarOpcion(opcion: string): void {
    this.selectedOption = opcion;
    this.page = 1;
    this.peliculas = [];
    this.mostrarPeliculas();
  }
}
