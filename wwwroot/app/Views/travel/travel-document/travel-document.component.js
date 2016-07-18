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
var travel_service_1 = require('../shared/travel.service');
var traveldocumentComponent = (function () {
    function traveldocumentComponent(service) {
        this.service = service;
    }
    traveldocumentComponent.prototype.ngOnInit = function () {
        this.travels = this.service.getTravels();
    };
    traveldocumentComponent = __decorate([
        core_1.Component({
            selector: 'travel-document',
            templateUrl: 'app/Views/travel/travel-document/travel-document.component.html',
            providers: [travel_service_1.TravelService]
        }), 
        __metadata('design:paramtypes', [travel_service_1.TravelService])
    ], traveldocumentComponent);
    return traveldocumentComponent;
}());
exports.traveldocumentComponent = traveldocumentComponent;
