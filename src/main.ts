import './polyfills.ts';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {AppModule} from './app/app.module';
import {AuthService} from 'esta-webjs-extensions';

if (environment.production) {
  enableProdMode();
}

AuthService.init({onLoad: 'check-sso'}, 'assets/auth-config.json')
  .then(() => {
      startAngular();
  })
  .catch((err) => {
    console.warn('Error starting app with keycloak auth-service. Do you have the auth-config.json? Starting angular anyway', err);
    startAngular();
  });

function startAngular() {
  platformBrowserDynamic().bootstrapModule(AppModule);
}
