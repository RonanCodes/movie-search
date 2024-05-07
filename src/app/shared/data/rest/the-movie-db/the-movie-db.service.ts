import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { tmdbApiSearchQuery } from './the-movie-db.constant';
import { TmdbSearchResponse } from './the-movie-db.model';

@Injectable({
  providedIn: 'root',
})
export class TheMovieDbService {
  public constructor(private httpClient: HttpClient) {}

  public searchMovies(query: string): Observable<TmdbSearchResponse> {
    return this.httpClient.get<TmdbSearchResponse>(
      `${tmdbApiSearchQuery}${query}`
    );
  }
}
