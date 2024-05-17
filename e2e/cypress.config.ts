import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run movie-search:serve:development',
        production: 'nx run movie-search:serve:production',
      },
      ciWebServerCommand: 'nx run movie-search:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
