import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ApiTmdbBusquedaService } from 'src/app/Services/api-tmdb-busqueda.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm!: FormGroup;
  searchResults: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiTmdbBusquedaService: ApiTmdbBusquedaService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['']
    });

    this.searchForm.controls['searchTerm'].valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(value => this.apiTmdbBusquedaService.getBusquedaGlobal(value))
      )
      .subscribe(results => {
        this.searchResults = results.results;
      });
  }

  submitForm() {
    if (this.searchForm.valid) {
      const selectedResult = this.searchResults.find(result => result.title === this.searchForm.value.searchTerm);
      if (selectedResult) {
        this.onOptionSelected(selectedResult);
      }
    }
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const id = event.option.value.id;
    const tipo = event.option.value.media_type;
    this.searchForm.reset();
    this.searchResults = [];
    window.location.href = `/detalle-busqueda/${tipo}/${id}`;
  }

  displayFn(result: any): string {
    return result ? result.title : '';
  }
}
