"use strict";
// ///<reference path="./../../typings/browser/ambient/es6-shim/index.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routes_1.APP_ROUTER_PROVIDERS]);
