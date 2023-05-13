import { Component } from '@angular/core';
import { ApiTmdbBusquedaService } from 'src/app/Services/api-tmdb-busqueda.service';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent {
  query: string = '';
  results: any[] = [];
  filteredResults: any[] = [];

  constructor(private apiTmdbBusquedaService: ApiTmdbBusquedaService) { }

  buscar() {
    if (this.query.trim().length >= 3) {
      this.apiTmdbBusquedaService.getBusquedaGlobal(this.query).subscribe((data: any) => {
        this.results = data.results.filter((result: any) => result.poster_path !== null);
        this.filteredResults = this.results;
      });
    } else {
      this.results = [];
      this.filteredResults = [];
    }
  }

  borrarResultados() {
    if (this.query.trim().length === 0) {
      this.results = [];
      this.filteredResults = [];
    }
  }

  getImageUrl(result: any): string {
    if (result.poster_path) {
      return `https://image.tmdb.org/t/p/w185${result.poster_path}`;
    } else {
      return '/assets/placeholder-image.jpg';
    }
  }

}

