import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { GraphModule } from './graph/graph.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(GraphModule)
  .catch(err => console.log(err));
