import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MovieStoreService } from './shared/data/store/movie-store/movie-store.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withHashLocation()),
    provideAnimationsAsync(),
    provideHttpClient(),
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (movieStoreService: MovieStoreService) => {
    //     movieStoreService.initStore();
    //   },
    //   deps: [MovieStoreService],
    // },
  ],
};
