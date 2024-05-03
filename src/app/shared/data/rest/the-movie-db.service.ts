import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TheMovieDbService {
  public constructor(private httpClient: HttpClient) {}

  public getMovies() {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${environment.API_KEY}`
    );
  }
}
