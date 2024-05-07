import { Injectable } from '@angular/core';
import { TheMovieDbService } from '../../rest/the-movie-db/the-movie-db.service';
import { ReplaySubject } from 'rxjs';
import {
  TmdbMovie,
  TmdbSearchResponse,
} from '../../rest/the-movie-db/the-movie-db.model';

@Injectable({
  providedIn: 'root',
})
export class MovieStoreService {
  private _movies = new ReplaySubject<TmdbSearchResponse>(1); // TODO: Update to custom Movie type:
  public movies$ = this._movies.asObservable();

  public constructor(private theMovieDbService: TheMovieDbService) {}

  public searchMovies(searchQuery: string, page = 1): void {
    searchQuery = `${searchQuery}&page=${page}`;

    this.theMovieDbService
      .searchMovies(searchQuery)
      .subscribe((tmdbMovieResponse) => this._movies.next(tmdbMovieResponse));
  }
}
