import { TestBed } from '@angular/core/testing';

import { MoviesapiserviceService } from './moviesapiservice.service';

describe('MoviesapiserviceService', () => {
  let service: MoviesapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
