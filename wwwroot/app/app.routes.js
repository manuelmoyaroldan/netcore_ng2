"use strict";
var router_1 = require('@angular/router');
var test_component_1 = require('./Views/test/test.component');
var travel_component_1 = require('./Views/travel/travel.component');
//import {traveldocumentComponent} from './Views/travel/travel-document/travel-document.component';
var travel_routes_1 = require('./Views/travel/travel.routes');
exports.routes = [
    //{path: '', redirectTo: '/test', pathMatch: 'prefix'},
    { path: '', component: test_component_1.testComponent },
    { path: 'travel', component: travel_component_1.travelComponent }
].concat(travel_routes_1.TravelRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
