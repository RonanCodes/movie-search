import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieStoreService } from 'src/app/shared/data/store/movie-store/movie-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { TmdbMovie } from 'src/app/shared/data/rest/the-movie-db/the-movie-db.model';

@Component({
  selector: 'mose-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailComponent {
  public movieId: number | undefined;
  // public tmdbMovie$: Observable<TmdbMovie | undefined>;

  public tmdbMovie$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const movieId = Number(params.get('movieId'));
      return this.movieStoreService.getMovieDetail(movieId);
    })
  );

  public constructor(
    public movieStoreService: MovieStoreService,
    private route: ActivatedRoute
  ) {
    // public route: Route
    // this.movieId = this.route.snapshot.paramMap.get('movieId') !== null;
    // this.tmdbMovie$ = this.route.paramMap.pipe(
    //   switchMap((params) => {
    //     this.movieId = Number(params.get('movieId'));
    //     return this.movieStoreService.getMovieDetail(this.movieId);
    //   })
    // );
    // console.log(this.movieId);
  }
}
