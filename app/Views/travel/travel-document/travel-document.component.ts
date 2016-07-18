import {Component, OnInit} from '@angular/core';

import {TravelService} from '../shared/travel.service';

@Component({
    selector: 'travel-document',
    templateUrl: 'app/Views/travel/travel-document/travel-document.component.html',
    providers: [TravelService]
})

export class traveldocumentComponent implements OnInit {
    
    travels: string;

    constructor(private service: TravelService){}

    ngOnInit(){
        this.travels=this.service.getTravels();
    }

}