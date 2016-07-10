"use strict";
var router_1 = require('@angular/router');
var test_component_1 = require('./Views/test/test.component');
var travel_component_1 = require('./Views/travel/travel.component');
exports.routes = [
    //{path: '', redirectTo: '/test', pathMatch: 'prefix'},
    { path: '', component: test_component_1.testComponent },
    { path: 'travel', component: travel_component_1.travelComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
