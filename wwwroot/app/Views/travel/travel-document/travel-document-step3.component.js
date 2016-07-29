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
var list_1 = require('@angular2-material/list');
var input_1 = require('@angular2-material/input');
var icon_1 = require('@angular2-material/icon');
var traveldocumentstep3Component = (function () {
    function traveldocumentstep3Component() {
        this.stepChange = new core_1.EventEmitter();
        this.isEdition = false;
    }
    traveldocumentstep3Component.prototype.ngOnInit = function () {
        this.selected = { id: 0 };
        if (this.current.advance == undefined) {
            this.current.advance = [];
        }
    };
    traveldocumentstep3Component.prototype.clickYesAdvance = function () {
        this.isEdition = true;
    };
    traveldocumentstep3Component.prototype.clickNoAdvance = function () {
        this.step = this.step + 1;
        this.stepChange.emit(this.step);
    };
    traveldocumentstep3Component.prototype.clickSaveAdvance = function () {
        this.current.advance.push(this.selected);
        this.step = this.step + 1;
        this.stepChange.emit(this.step);
        this.isEdition = false;
    };
    traveldocumentstep3Component.prototype.clickCancelAdvance = function () {
        this.isEdition = false;
    };
    traveldocumentstep3Component.prototype.clickNewAdvance = function () {
        this.isEdition = true;
        this.selected = { id: 0 };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], traveldocumentstep3Component.prototype, "current", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], traveldocumentstep3Component.prototype, "step", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], traveldocumentstep3Component.prototype, "stepChange", void 0);
    traveldocumentstep3Component = __decorate([
        core_1.Component({
            selector: 'travel-document-step3',
            templateUrl: 'app/Views/travel/travel-document/travel-document-step3.component.html',
            directives: [list_1.MD_LIST_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, input_1.MdInput, icon_1.MD_ICON_DIRECTIVES],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [])
    ], traveldocumentstep3Component);
    return traveldocumentstep3Component;
}());
exports.traveldocumentstep3Component = traveldocumentstep3Component;
