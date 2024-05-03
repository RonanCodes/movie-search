import { HttpClient } from '@angular/common/http';
import { TheMovieDbService } from './the-movie-db.service';

describe('TheMovieDbService', () => {
  let service: TheMovieDbService;

  let httpClient: jest.Mocked<HttpClient>;

  beforeEach(() => {
    httpClient = {} as jest.Mocked<HttpClient>;
    httpClient.get = jest.fn();
    service = new TheMovieDbService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
