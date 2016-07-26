import {Component, Input, Output, EventEmitter} from '@angular/core';

import {ITravel} from '../../shared/interfaces';

import {purposeselectorComponent} from '../../purpose/purpose-selector.component';
import {travelwayselectorComponent} from '../../travelway/travelway-selector.component';
import {costcenterselectorComponent} from '../../costcenter/costcenter-selector.component';
import {traveltypeselectorComponent} from '../../traveltype/traveltype-selector.component';

@Component({
    selector: 'travel-document-step1',
    templateUrl: 'app/Views/travel/travel-document/travel-document-step1.component.html',
    directives: [purposeselectorComponent, travelwayselectorComponent,costcenterselectorComponent, traveltypeselectorComponent],
})

export class traveldocumentstep1Component{
    @Input() current: ITravel;
    @Output() currentChange = new  EventEmitter();

    constructor(){}

}