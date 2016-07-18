// ///<reference path="./../../typings/browser/ambient/es6-shim/index.d.ts"/>
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import {AppComponent} from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
  
bootstrap(AppComponent,[APP_ROUTER_PROVIDERS, HTTP_PROVIDERS]);   