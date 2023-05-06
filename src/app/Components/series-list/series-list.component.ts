import { Component } from '@angular/core';
import { ApiTmdbSeriesService } from 'src/app/Services/api-tmdb-series.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent {
  series: any[] = [];
  generos: any[] = [];
  faPlay = faPlay;
  selectedOption = 'ultima';
  page = 1;

  constructor(private seriesServices: ApiTmdbSeriesService) { }

  ngOnInit(): void {
    this.mostrarSeries();
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
