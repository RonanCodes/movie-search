import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { TmdbSearchResponse } from 'src/app/shared/data/rest/the-movie-db/the-movie-db.model';
import { MovieStoreService } from 'src/app/shared/data/store/movie-store/movie-store.service';
import { Router } from '@angular/router';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  let router: jest.Mocked<Router>;

  let movieStoreService: jest.Mocked<MovieStoreService>;
  let tmdbSearchResponse$: Subject<TmdbSearchResponse>;
  let tmdbSearchResponse: TmdbSearchResponse;

  beforeEach(async () => {
    router = {} as jest.Mocked<Router>;
    router.navigate = jest.fn();

    tmdbSearchResponse = {
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: '/path/to/image.jpg',
          genre_ids: [1, 2, 3],
          id: 1,
          original_language: 'en',
          original_title: 'Original Title',
          overview: 'Overview',
          popularity: 100,
          poster_path: '/path/to/image.jpg',
          release_date: '2021-01-01',
          title: 'Title',
          video: false,
          vote_average: 10,
          vote_count: 1000,
        },
        {
          adult: false,
          backdrop_path: '/path/to/image.jpg',
          genre_ids: [1, 2, 3],
          id: 2,
          original_language: 'en',
          original_title: 'Original Title 2',
          overview: 'Overview 2',
          popularity: 100,
          poster_path: '/path/to/image.jpg',
          release_date: '2021-01-01',
          title: 'Title',
          video: false,
          vote_average: 10,
          vote_count: 1000,
        },
        {
          adult: false,
          backdrop_path: '/path/to/image.jpg',
          genre_ids: [1, 2, 3],
          id: 3,
          original_language: 'en',
          original_title: 'Original Title 3',
          overview: 'Overview 3',
          popularity: 100,
          poster_path: '/path/to/image.jpg',
          release_date: '2021-01-01',
          title: 'Title',
          video: false,
          vote_average: 10,
          vote_count: 1000,
        },
      ],
      total_pages: 2,
      total_results: 3,
    };

    tmdbSearchResponse$ = new Subject<TmdbSearchResponse>();

    movieStoreService = {
      tmdbSearchResponse$: tmdbSearchResponse$.asObservable(),
    } as jest.Mocked<MovieStoreService>;

    movieStoreService.searchMovies = jest.fn();
    movieStoreService.getMovieDetail = jest.fn();

    await TestBed.configureTestingModule({
      imports: [
        SearchComponent,
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: MovieStoreService, useValue: movieStoreService },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create, and show a popcorn emoji by default', () => {
    // Act
    const innerText = (
      fixture.debugElement.query(By.css('.emoji h1'))
        .nativeElement as HTMLElement
    ).innerHTML;

    // Assert
    expect(innerText).toBe('🍿');
    expect(component).toBeTruthy();
  });

  describe('#constructor()', () => {
    it('should setup the auto search on debounce', () => {
      // Act
      const innerText = (
        fixture.debugElement.query(By.css('.emoji h1'))
          .nativeElement as HTMLElement
      ).innerHTML;

      // Assert
      expect(innerText).toBe('🍿');
    });
  });

  // describe('#searchFormControl', () => {
  //   it('should trigger a new search', () => {
  //     // TODO: Pull in the Angular Material Test Harness
  //     // Act
  //     // Assert
  //   });
  // });

  describe('#goToPage()', () => {
    it('should trigger a search for the next page', () => {
      // Arrange
      tmdbSearchResponse$.next(tmdbSearchResponse);
      fixture.detectChanges();

      // Act
      (
        fixture.debugElement.query(By.css('#forward-page-button'))
          .nativeElement as HTMLButtonElement
      ).dispatchEvent(new Event('click'));

      // Assert
      expect(movieStoreService.searchMovies).toHaveBeenCalledWith(undefined, 2);
    });
  });

  describe('#goToMovieDetail()', () => {
    it('should route to the movie-detail page with the movieId param passed in', () => {
      // Arrange
      tmdbSearchResponse$.next(tmdbSearchResponse);
      fixture.detectChanges();

      // Act
      (
        fixture.debugElement.query(By.css('div.movie span')) // will click on first element
          .nativeElement as HTMLSpanElement
      ).dispatchEvent(new Event('click'));

      // Assert
      expect(router.navigate).toHaveBeenCalledWith([
        `/movie-detail`,
        { movieId: 1 },
      ]);
    });
  });
});
