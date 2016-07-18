"use strict";
var router_1 = require('@angular/router');
var test_component_1 = require('./test/test.component');
exports.routes = [
    { path: '', redirectTo: '/test', pathMatch: 'prefix' },
    { path: 'test', component: test_component_1.testComponent },
    { path: 'travel', component: test_component_1.testComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
