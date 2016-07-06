import { provideRouter, RouterConfig } from '@angular/router';

import {testComponent} from './Views/test/test.component' 
 
export const routes: RouterConfig = [
  {path: '', redirectTo: '/test', pathMatch: 'prefix'},
  {path: 'test', component: testComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
