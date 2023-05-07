import { TestBed } from '@angular/core/testing';

import { ApiTmdbBusquedaService } from './api-tmdb-busqueda.service';

describe('ApiTmdbBusquedaService', () => {
  let service: ApiTmdbBusquedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTmdbBusquedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
