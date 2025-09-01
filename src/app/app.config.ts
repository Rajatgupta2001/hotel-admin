import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes.minimal';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideServiceWorker('ngsw-worker.js', {
      registrationStrategy: 'registerWhenStable:30000',
    }),
    importProvidersFrom([
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatExpansionModule,
      ReactiveFormsModule,
      FormsModule,
    ]),
  ],
};
