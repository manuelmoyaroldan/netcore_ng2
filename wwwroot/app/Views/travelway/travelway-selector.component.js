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
var travelway_service_1 = require('./travelway.service');
var travelwayselectorComponent = (function () {
    function travelwayselectorComponent(service) {
        this.service = service;
        this.selectedChange = new core_1.EventEmitter();
        this.idSelectedChange = new core_1.EventEmitter();
    }
    travelwayselectorComponent.prototype.ngOnInit = function () {
        this.list = this.service.getAll();
    };
    travelwayselectorComponent.prototype.onChange = function (value) {
        this.idSelectedChange.emit(value);
        this.selectedChange.emit(this.list.find(function (c) { return c.id === value; }));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], travelwayselectorComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], travelwayselectorComponent.prototype, "idSelected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], travelwayselectorComponent.prototype, "selectedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], travelwayselectorComponent.prototype, "idSelectedChange", void 0);
    travelwayselectorComponent = __decorate([
        core_1.Component({
            selector: 'travelway-selector',
            templateUrl: 'app/Views/travelway/travelway-selector.component.html',
            providers: [travelway_service_1.travelwayService]
        }), 
        __metadata('design:paramtypes', [travelway_service_1.travelwayService])
    ], travelwayselectorComponent);
    return travelwayselectorComponent;
}());
exports.travelwayselectorComponent = travelwayselectorComponent;
