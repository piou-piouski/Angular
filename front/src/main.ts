import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { isDevMode } from '@angular/core';

if (!isDevMode()) {
  console.log = () => {
    // Je suis vide
  };
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
