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
var http_1 = require('@angular/http');
var CostcenterService = (function () {
    function CostcenterService(http) {
        this.http = http;
        this.costcenters = [];
    }
    CostcenterService.prototype.getCostCenters = function () {
        this.costcenters.push({ id: 1, name: 'ALR-FINANCE' });
        this.costcenters.push({ id: 2, name: 'ALR-PROJECT' });
        this.costcenters.push({ id: 3, name: 'ALR-IT' });
        this.costcenters.push({ id: 4, name: 'ALR-TECHNICAL' });
        this.costcenters.push({ id: 5, name: 'ALR-OPS' });
        return this.costcenters;
    };
    CostcenterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CostcenterService);
    return CostcenterService;
}());
exports.CostcenterService = CostcenterService;
