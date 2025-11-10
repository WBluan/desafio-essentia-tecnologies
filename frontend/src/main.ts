import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi,  } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { appConfig } from './app/app.config';
import { AuthInterceptor } from './app/core/interceptors/auth.interceprot';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient((withInterceptorsFromDi())),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ...appConfig.providers
  ]
}).catch(err => console.error(err));
