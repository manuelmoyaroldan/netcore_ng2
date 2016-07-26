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
var costcenter_service_1 = require('./costcenter.service');
var costcenterselectorComponent = (function () {
    function costcenterselectorComponent(service) {
        this.service = service;
        this.selectedChange = new core_1.EventEmitter();
        this.idSelectedChange = new core_1.EventEmitter();
    }
    costcenterselectorComponent.prototype.ngOnInit = function () {
        this.costcenters = this.service.getCostCenters();
        //this.selected=this.costcenters.find(c=> c.id===this.selected.id);
    };
    costcenterselectorComponent.prototype.onChange = function (value) {
        //this.costcenters.find(c=> c.id=value);
        //alert(JSON.stringify(this.costcenters.find((c: ICostCenter)=> c.id===value)));
        //alert(JSON.stringify(value));
        //this.selectedChange.emit(this.costcenters.find((c: ICostCenter)=> c.id===value));
        //console.log(this.costcenters.find((c: ICostCenter)=> c.id===value));
        //let temp:ICostCenter=this.costcenters.find(c=> c.id===value);
        //this.selectedChange.emit(temp);
        //console.log(temp);
        //console.log(this.costcenters); 
        //console.log(this.costcenters.find(c=> c.id=value));
        //alert(this.costcenters.findIndex(c=> c.id=value));
        this.idSelectedChange.emit(value);
        this.selectedChange.emit(this.costcenters.find(function (c) { return c.id === value; }));
        //console.log("onchange ->"+value);
        //this.selectedChange.emit();
        //let temp:ICostCenter=this.costcenters.find(c=> c.id===value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], costcenterselectorComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], costcenterselectorComponent.prototype, "idSelected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], costcenterselectorComponent.prototype, "selectedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], costcenterselectorComponent.prototype, "idSelectedChange", void 0);
    costcenterselectorComponent = __decorate([
        core_1.Component({
            selector: 'costcenter-selector',
            templateUrl: 'app/Views/costcenter/costcenter-selector.component.html',
            providers: [costcenter_service_1.CostcenterService]
        }), 
        __metadata('design:paramtypes', [costcenter_service_1.CostcenterService])
    ], costcenterselectorComponent);
    return costcenterselectorComponent;
}());
exports.costcenterselectorComponent = costcenterselectorComponent;
