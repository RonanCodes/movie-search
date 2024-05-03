import { Route } from '@angular/router';
import { SearchComponent } from './views/search/search.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'movie-detail', component: MovieDetailComponent },
];
