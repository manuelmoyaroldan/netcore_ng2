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
var travelway_selector_component_1 = require('../../travelway/travelway-selector.component');
var traveldocumentstep2Component = (function () {
    function traveldocumentstep2Component() {
        this.stepChange = new core_1.EventEmitter();
        this.isEdition = false;
        this.isTravelEdition = false;
        this.isHotelEdition = false;
    }
    traveldocumentstep2Component.prototype.ngOnInit = function () {
        this.selected = { id: 0, hotel_yn: false };
        //Initialize travelPlan List
        if (this.current.travelPlan == undefined) {
            this.current.travelPlan = [];
        }
    };
    //******************************Events*****************************************
    traveldocumentstep2Component.prototype.clickSaveTravelPlan = function () {
        this.selected.travel_yn = true;
        this.isEdition = true;
        this.isTravelEdition = false;
        this.isHotelEdition = true;
    };
    traveldocumentstep2Component.prototype.clickCancelTravelPlan = function () {
        //this.selected.travel_yn = true;
        this.isEdition = false;
        this.isTravelEdition = false;
        //this.isHotelEdition = true;
    };
    traveldocumentstep2Component.prototype.clickCancelHotel = function () {
        this.isEdition = true;
        this.selected.hotel_yn = false;
    };
    traveldocumentstep2Component.prototype.clickSaveHotel = function () {
        if (this.selected.hotel_yn || this.selected.travel_yn) {
            this.current.travelPlan.push(this.selected);
            this.isTravelEdition = false;
            this.isHotelEdition = false;
            this.isEdition = false;
            //next tab
            this.step = this.step + 1;
            this.stepChange.emit(this.step);
        }
    };
    traveldocumentstep2Component.prototype.clickYesTravelPlan = function () {
        this.isEdition = true;
        this.isTravelEdition = true;
    };
    traveldocumentstep2Component.prototype.clickNoTravelPlan = function () {
        this.selected.travel_yn = false;
        this.isHotelEdition = true;
        //this.isEdition=false;
    };
    traveldocumentstep2Component.prototype.clickYesHotel = function () {
        this.isEdition = true;
        this.selected.hotel_yn = true;
    };
    traveldocumentstep2Component.prototype.clickNoHotel = function () {
        this.isEdition = false;
        this.isHotelEdition = false;
        this.selected.hotel_yn = false;
        if (this.selected.travel_yn) {
            this.current.travelPlan.push(this.selected);
        }
        //next tab
        this.step = this.step + 1;
        this.stepChange.emit(this.step);
    };
    traveldocumentstep2Component.prototype.clickAddTravel = function () {
        this.selected = { id: 0, hotel_yn: false };
        this.isEdition = true;
        this.isTravelEdition = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], traveldocumentstep2Component.prototype, "current", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], traveldocumentstep2Component.prototype, "step", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], traveldocumentstep2Component.prototype, "stepChange", void 0);
    traveldocumentstep2Component = __decorate([
        core_1.Component({
            selector: 'travel-document-step2',
            templateUrl: 'app/Views/travel/travel-document/travel-document-step2.component.html',
            directives: [travelway_selector_component_1.travelwayselectorComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], traveldocumentstep2Component);
    return traveldocumentstep2Component;
}());
exports.traveldocumentstep2Component = traveldocumentstep2Component;
