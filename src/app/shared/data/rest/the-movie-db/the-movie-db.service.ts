import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  apiKeyQueryParam,
  tmdbApiFindById,
  tmdbApiSearchQuery,
} from './the-movie-db.constant';
import {
  TmdbMovie,
  TmdbMovieDetail,
  TmdbSearchResponse,
} from './the-movie-db.model';

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

  public searchMovieById(movieId: number): Observable<TmdbMovieDetail> {
    return this.httpClient.get<TmdbMovieDetail>(
      `${tmdbApiFindById}${movieId}${apiKeyQueryParam}`
    );
  }
}
