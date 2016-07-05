import { provideRouter, RouterConfig } from '@angular/router';

import {testComponent} from './test/test.component' 
 
export const routes: RouterConfig = [
  //{path: '', redirectTo: '/test'},
  {path: 'test', component: testComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
