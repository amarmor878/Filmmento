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
        this.results = data.results;
        this.filteredResults = this.results;
      });
    } else {
      this.results = [];
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

