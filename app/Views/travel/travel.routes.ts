import {RouterConfig} from '@angular/router';

import {traveldocumentComponent} from './travel-document/travel-document.component';
import {travellistComponent} from './travel-list/travel-list.component';

export const TravelRoutes: RouterConfig=[
    { path: 'traveldocument/:id', component: traveldocumentComponent},
    { path: 'traveldocument/:mode/:id', component: traveldocumentComponent},
    { path: 'travellist', component: travellistComponent}
];