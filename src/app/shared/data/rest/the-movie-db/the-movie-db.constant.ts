import { environment } from 'src/environments/environment.development';

const tmdbApiBaseUrl = 'https://api.themoviedb.org/3/';

// TODO: Move this to the header
export const apiKeyQueryParam = `?api_key=${environment.API_KEY}`;

export const tmdbApiSearchQuery = `${tmdbApiBaseUrl}search/movie${apiKeyQueryParam}&query=`;

export const tmdbApiFindById = `${tmdbApiBaseUrl}movie/`;
