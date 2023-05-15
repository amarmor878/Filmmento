import { Component } from '@angular/core';
import { ApiTmdbSeriesService } from 'src/app/Services/api-tmdb-series.service';
import { faPlay, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewportScroller } from '@angular/common';
import { DialogTrailerComponent } from '../dialog-trailer/dialog-trailer.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent {
  series: any[] = [];
  generos: any[] = [];
  faPlay = faPlay;
  faInfo = faInfo;
  selectedOption = 'ultima';
  page = 1;
  modalOpen = false;

  constructor(private seriesServices: ApiTmdbSeriesService, private router: Router, private dialog: MatDialog, private sanitizer: DomSanitizer, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.mostrarSeries();
  }

  verDetalles(tipo: string, id: number) {
    this.router.navigate(['/detalle-busqueda', tipo, id]);
  }

  openTrailerModal(movieId: number): void {
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
    const currentPosition = this.viewportScroller.getScrollPosition();
    this.viewportScroller.scrollToPosition([0, 0]);
    this.seriesServices.getSerieTrailer(movieId)
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

  mostrarSeries(): void {
    if (this.selectedOption == 'popular') {
      this.seriesServices.getSeriesPopulares(this.page).subscribe((data: any) => {
        this.series = data.results;
      });
    } else if (this.selectedOption == 'top-rated') {
      this.seriesServices.getSeriesTopRated(this.page).subscribe((data: any) => {
        this.series = data.results;
      });
    } else {
      this.seriesServices.getSeriesUltimosLanzamientos(this.page).subscribe((data: any) => {
        this.series = data.results;
      });
    }
  }

  mostrarMasSeries(): void {
    this.page += 1;
    if (this.selectedOption == 'popular') {
      this.seriesServices.getSeriesPopulares(this.page).subscribe((data: any) => {
        this.series = [...this.series, ...data.results];
      });
    } else if (this.selectedOption == 'top-rated') {
      this.seriesServices.getSeriesTopRated(this.page).subscribe((data: any) => {
        this.series = [...this.series, ...data.results];
      });
    } else {
      this.seriesServices.getSeriesUltimosLanzamientos(this.page).subscribe((data: any) => {
        this.series = [...this.series, ...data.results];
      });
    }
  }

  seleccionarOpcion(opcion: string): void {
    this.selectedOption = opcion;
    this.page = 1;
    this.series = [];
    this.mostrarSeries();
  }
}
