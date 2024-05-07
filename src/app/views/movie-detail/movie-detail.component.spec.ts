import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailComponent } from './movie-detail.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieStoreService } from 'src/app/shared/data/store/movie-store/movie-store.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async () => {
    const movieStoreService = {} as jest.Mocked<MovieStoreService>;
    const activatedRoute = {
      paramMap: of({} as ParamMap),
    } as jest.Mocked<ActivatedRoute>;

    await TestBed.configureTestingModule({
      imports: [MovieDetailComponent, CommonModule, HttpClientModule],
      providers: [
        { provide: MovieStoreService, useValue: movieStoreService },
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
