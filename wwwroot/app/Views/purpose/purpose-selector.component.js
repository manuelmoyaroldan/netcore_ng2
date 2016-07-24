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
var purpose_service_1 = require('./purpose.service');
var purposeselectorComponent = (function () {
    function purposeselectorComponent(service) {
        this.service = service;
        this.testChange = new core_1.EventEmitter();
        this.selectedChange = new core_1.EventEmitter();
    }
    purposeselectorComponent.prototype.ngOnInit = function () {
        //this.selectedPurpose={id: 3, name: 'VISIT'};
        // this.purposes=[];
        // this.purposes.push({id: 1, name: 'TRAINING'});
        // this.purposes.push({id: 2, name: 'PROJECT'});
        // this.purposes.push({id: 3, name: 'VISIT'});
        // this.purposes.push({id: 4, name: 'TEST 01'});
        // this.purposes.push({id: 5, name: 'TEST 02'});
        //this.selectedChange.emit(this.selected);
        //this.selectedPurpose=this.purposes[3];
        this.purposes = this.service.getPurposes();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], purposeselectorComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], purposeselectorComponent.prototype, "test", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], purposeselectorComponent.prototype, "testChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], purposeselectorComponent.prototype, "selectedChange", void 0);
    purposeselectorComponent = __decorate([
        core_1.Component({
            selector: 'purpose-selector',
            templateUrl: 'app/Views/purpose/purpose-selector.component.html',
            providers: [purpose_service_1.PurposeService]
        }), 
        __metadata('design:paramtypes', [purpose_service_1.PurposeService])
    ], purposeselectorComponent);
    return purposeselectorComponent;
}());
exports.purposeselectorComponent = purposeselectorComponent;
