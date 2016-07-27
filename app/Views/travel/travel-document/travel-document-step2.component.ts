import {Component, Input, OnInit} from '@angular/core';

import {ITravel,ITravelPlan} from '../../shared/interfaces';
import {travelwayselectorComponent} from '../../travelway/travelway-selector.component';

@Component({
    selector: 'travel-document-step2',
    templateUrl: 'app/Views/travel/travel-document/travel-document-step2.component.html',
    directives: [travelwayselectorComponent]
})

export class traveldocumentstep2Component{
    @Input() current:ITravel;

    selected: ITravelPlan;

    constructor(){
    }

    ngOnInit(){
        this.selected={id: 0};
    }

    clickSaveTravelPlan(){
        if(this.current.travelPlan==undefined) this.current.travelPlan=[];
        this.current.travelPlan.push(this.selected);
        this.selected={id: 0};
    }
    
}
