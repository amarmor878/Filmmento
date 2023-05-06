import { TestBed } from '@angular/core/testing';

import { ApiTmdbSeriesService } from './api-tmdb-series.service';

describe('ApiTmdbSeriesService', () => {
  let service: ApiTmdbSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTmdbSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
