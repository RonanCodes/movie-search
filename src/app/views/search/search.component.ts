import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieStoreService } from 'src/app/shared/data/store/movie-store/movie-store.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { debounce, debounceTime } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'mose-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  public searchFormControl = new FormControl('');

  // TODO: Move this to the MovieStoreService:
  private searchQuery: string | undefined;

  public constructor(
    public movieStoreService: MovieStoreService,
    public router: Router
  ) {
    this.searchFormControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((searchQuery) => {
        // TODO: Add in a filter operator:
        if (searchQuery) {
          this.movieStoreService.searchMovies(searchQuery);
          this.searchQuery = searchQuery;
        }
      });
  }

  public goToPage(page: number): void {
    if (this.searchQuery) {
      this.movieStoreService.searchMovies(this.searchQuery, page);
    }
  }

  public goToMovieDetail(movieId: number): void {
    console.log({ movieId });
    this.router.navigate([`/movie-detail`, { movieId }]);
  }
}
