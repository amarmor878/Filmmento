import { ApiTmdbPeliculasService } from 'src/app/Services/api-tmdb-peliculas.service';
import { DialogTrailerComponent } from '../dialog-trailer/dialog-trailer.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';

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
  modalOpen = false;

  constructor(
    private peliculasService: ApiTmdbPeliculasService,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.getPeliculasTopRated();
    this.getGenerosPeliculas();
  }

  getPeliculasTopRated(): void {
    this.peliculasService
      .getPeliculasTopRated(this.currentPage)
      .subscribe((peliculasData) => {
        this.peliculas = peliculasData.results;
      });
  }

  getGenerosPeliculas(): void {
    this.peliculasService.getGenerosPeliculas().subscribe((generosData) => {
      this.generos = generosData.genres;
    });
  }

  getGeneroById(id: number): string {
    const genero = this.generos.find((g) => g.id === id);
    return genero ? genero.name : '';
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
        data: { trailerUrl },
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayHoverPause: true,
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
