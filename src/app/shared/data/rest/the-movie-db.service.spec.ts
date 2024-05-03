import { TestBed } from '@angular/core/testing';

import { TheMovieDbService } from './the-movie-db.service';

describe('TheMovieDbService', () => {
  let service: TheMovieDbService;

  beforeEach(() => {
    service = new TheMovieDbService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
