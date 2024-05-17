import { Injectable } from '@angular/core';
import { TheMovieDbService } from '../../rest/the-movie-db/the-movie-db.service';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import {
  TmdbMovieDetail,
  TmdbSearchResponse,
} from '../../rest/the-movie-db/the-movie-db.model';

@Injectable({
  providedIn: 'root',
})
export class MovieStoreService {
  public searchQuery: string | undefined;

  private _tmdbSearchResponse$ = new BehaviorSubject<TmdbSearchResponse | null>(
    null // null needed to check if the response has been initialised
  ); // TODO: Update to custom Movie type:
  public tmdbSearchResponse$ = this._tmdbSearchResponse$
    .asObservable()
    .pipe(filter((response) => !!response)); // filter out null

  public constructor(private theMovieDbService: TheMovieDbService) {}

  // TODO: Add some caching for previous requests:
  public getMovieDetail(movieId: number): Observable<TmdbMovieDetail> {
    return this.theMovieDbService.searchMovieById(movieId);
  }

  public searchMovies(searchQuery?: string, page = 1): void {
    if (searchQuery) {
      this.searchQuery = searchQuery;
    }
    const searchQueryWithPage = `${this.searchQuery}&page=${page}`;

    this.theMovieDbService
      .searchMovies(searchQueryWithPage)
      .subscribe((tmdbMovieResponse) =>
        this._tmdbSearchResponse$.next(tmdbMovieResponse)
      );
  }
}
