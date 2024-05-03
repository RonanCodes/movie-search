import { MovieStoreService } from './movie-store.service';

describe('MovieStoreService', () => {
  let service: MovieStoreService;

  beforeEach(() => {
    service = new MovieStoreService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
