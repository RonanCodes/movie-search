import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieStoreService } from 'src/app/shared/data/store/movie-store/movie-store.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { tmdbBaseImgUrl } from 'src/app/shared/data/rest/the-movie-db/the-movie-db.constant';

@Component({
  selector: 'mose-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailComponent {
  public tmdbBaseImgUrlView = tmdbBaseImgUrl;
  public movieId: number | undefined;

  public tmdbMovie$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const movieId = Number(params.get('movieId'));
      return this.movieStoreService.getMovieDetail(movieId);
    })
  );

  public constructor(
    public movieStoreService: MovieStoreService,
    private route: ActivatedRoute
  ) {}
}
