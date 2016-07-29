// ///<reference path="./../../typings/browser/ambient/es6-shim/index.d.ts"/>
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
// Add these symbols to override the `LocationStrategy`
import { LocationStrategy,
         HashLocationStrategy } from '@angular/common';
import {disableDeprecatedForms, provideForms} from '@angular/forms'; //md-input, disableDeprecatedForms, provideForms in bootstrap
         

import {AppComponent} from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
  
bootstrap(AppComponent,
[APP_ROUTER_PROVIDERS, HTTP_PROVIDERS,disableDeprecatedForms(), provideForms(),
{ provide: LocationStrategy, useClass: HashLocationStrategy } // .../#/crisis-center/
]
);   