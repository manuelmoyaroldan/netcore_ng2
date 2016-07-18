import {Component, OnInit} from '@angular/core';

import {TravelService} from '../shared/travel.service';

@Component({
    selector: 'travel-list',
    templateUrl: 'app/Views/travel/travel-list/travel-list.component.html',
    providers: [TravelService]
})

export class travellistComponent implements OnInit{
    
    travels: string;

    constructor(private service: TravelService){}

    ngOnInit(){
        this.travels=this.service.getTravels();
    }
}