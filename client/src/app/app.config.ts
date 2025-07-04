import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { errorInterceptor } from './core/interceptors/error-interceptor';
import { loadingInterceptor } from './core/interceptors/loading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimations(),
    provideHttpClient(),
    provideHttpClient(withInterceptors([errorInterceptor, loadingInterceptor]))
  ]
};