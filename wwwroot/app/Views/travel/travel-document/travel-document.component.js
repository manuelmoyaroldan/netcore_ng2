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
var router_1 = require('@angular/router');
var travel_service_1 = require('../shared/travel.service');
var user_context_service_1 = require('../../user/user-context.service');
var purpose_selector_component_1 = require('../../purpose/purpose-selector.component');
var travelway_selector_component_1 = require('../../travelway/travelway-selector.component');
var costcenter_selector_component_1 = require('../../costcenter/costcenter-selector.component');
var traveltype_selector_component_1 = require('../../traveltype/traveltype-selector.component');
var travel_document_step1_component_1 = require('./travel-document-step1.component');
var travel_document_step2_component_1 = require('./travel-document-step2.component');
var traveldocumentComponent = (function () {
    function traveldocumentComponent(userContext, service, router, route) {
        this.userContext = userContext;
        this.service = service;
        this.router = router;
        this.route = route;
        this.step = 1;
        this.current = { id: -1,
            destination: 'TANGER',
            manager: null,
            from: null,
            to: null,
            type: null,
            purpose: { id: 2, name: 'PROJECT' },
            id_purpose: 2,
            user: null,
            reason: null,
            id_costcenter: 3,
            costcenter: { id: 3, name: 'ALR-IT' }
        };
    }
    traveldocumentComponent.prototype.ngOnInit = function () {
        // (+) converts string 'id' to a number
        var id = +this.route.snapshot.params['id'];
        var mode = this.route.snapshot.params['mode'];
        // console.log('Travel Document on Init');
        // console.log(id);
        // console.log(mode);
        this.travels = this.service.getTravels();
        if (id == 0) {
            this.current.id = 0;
            this.current.destination = '';
            var mytemp = { id: 3, name: 'ALR-IT' };
            this.current.costcenter = mytemp;
            this.current.user = this.userContext.user;
            this.current.manager = this.userContext.user.manager;
        }
    };
    traveldocumentComponent.prototype.onCancel = function (event) {
        event.preventDefault();
        var mytemp = { id: 3, name: 'ALR-IT' };
        //this.current.costcenter={id: 3, name: 'ALR-IT'};
        this.current.costcenter = mytemp;
        console.log("click ->" + this.current.costcenter);
    };
    traveldocumentComponent.prototype.clickPrev = function () {
        this.step = this.step - 1;
    };
    traveldocumentComponent.prototype.clickNext = function () {
        this.step = this.step + 1;
    };
    traveldocumentComponent = __decorate([
        core_1.Component({
            selector: 'travel-document',
            templateUrl: 'app/Views/travel/travel-document/travel-document.component.html',
            directives: [purpose_selector_component_1.purposeselectorComponent, travelway_selector_component_1.travelwayselectorComponent, costcenter_selector_component_1.costcenterselectorComponent, traveltype_selector_component_1.traveltypeselectorComponent, travel_document_step1_component_1.traveldocumentstep1Component, travel_document_step2_component_1.traveldocumentstep2Component],
            providers: [travel_service_1.TravelService]
        }), 
        __metadata('design:paramtypes', [user_context_service_1.UserContextService, travel_service_1.TravelService, router_1.Router, router_1.ActivatedRoute])
    ], traveldocumentComponent);
    return traveldocumentComponent;
}());
exports.traveldocumentComponent = traveldocumentComponent;
