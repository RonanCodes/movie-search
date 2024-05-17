import { TheMovieDbService } from '../../rest/the-movie-db/the-movie-db.service';
import { MovieStoreService } from './movie-store.service';

describe('MovieStoreService', () => {
  let service: MovieStoreService;

  let theMovieDbService: jest.Mocked<TheMovieDbService>;

  beforeEach(() => {
    theMovieDbService = {} as jest.Mocked<TheMovieDbService>;
    theMovieDbService.searchMovies = jest.fn();

    service = new MovieStoreService(theMovieDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
