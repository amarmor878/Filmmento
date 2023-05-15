import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { forkJoin } from 'rxjs';
import { ApiTmdbSeriesService } from 'src/app/Services/api-tmdb-series.service';
import { faPlay, faInfo } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogTrailerComponent } from '../dialog-trailer/dialog-trailer.component';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  modalOpen = false;

  constructor(private seriesServices: ApiTmdbSeriesService, public dialog: MatDialog, private router: Router, private sanitizer: DomSanitizer, private viewportScroller: ViewportScroller) { }

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

  openTrailerModal(serieId: number): void {
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
    const currentPosition = this.viewportScroller.getScrollPosition();
    this.viewportScroller.scrollToPosition([0, 0]);
    this.seriesServices.getSerieTrailer(serieId)
      .subscribe((data: any) => {
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
