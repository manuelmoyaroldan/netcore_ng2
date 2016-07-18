import { provideRouter, RouterConfig } from '@angular/router';

import {testComponent} from './Views/test/test.component' ;
import {travelComponent} from './Views/travel/travel.component';
import {traveldocumentComponent} from './Views/travel/travel-document/travel-document.component';
 
export const routes: RouterConfig = [
  //{path: '', redirectTo: '/test', pathMatch: 'prefix'},
  {path: '', component: testComponent},
  {path: 'travel', component: travelComponent},
  {path: 'traveldocument', component: traveldocumentComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
