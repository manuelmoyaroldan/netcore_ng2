"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var purpose_selector_component_1 = require('../../purpose/purpose-selector.component');
var travelway_selector_component_1 = require('../../travelway/travelway-selector.component');
var costcenter_selector_component_1 = require('../../costcenter/costcenter-selector.component');
var traveltype_selector_component_1 = require('../../traveltype/traveltype-selector.component');
var traveldocumentstep1Component = (function () {
    function traveldocumentstep1Component() {
        this.currentChange = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], traveldocumentstep1Component.prototype, "current", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], traveldocumentstep1Component.prototype, "step", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], traveldocumentstep1Component.prototype, "currentChange", void 0);
    traveldocumentstep1Component = __decorate([
        core_1.Component({
            selector: 'travel-document-step1',
            templateUrl: 'app/Views/travel/travel-document/travel-document-step1.component.html',
            directives: [purpose_selector_component_1.purposeselectorComponent, travelway_selector_component_1.travelwayselectorComponent, costcenter_selector_component_1.costcenterselectorComponent, traveltype_selector_component_1.traveltypeselectorComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], traveldocumentstep1Component);
    return traveldocumentstep1Component;
}());
exports.traveldocumentstep1Component = traveldocumentstep1Component;
