import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {TravelService} from '../shared/travel.service';
//import {ITravel} from '../../../Views/shared/interfaces';
import {ITravel, ITravelPurpose} from '../../../Views/shared/interfaces';

import {UserContextService} from '../../user/user-context.service'

import {purposeselectorComponent} from '../../purpose/purpose-selector.component';
import {travelwayselectorComponent} from '../../travelway/travelway-selector.component';
import {costcenterselectorComponent} from '../../costcenter/costcenter-selector.component';

@Component({
    selector: 'travel-document',
    templateUrl: 'app/Views/travel/travel-document/travel-document.component.html',
    directives: [purposeselectorComponent, travelwayselectorComponent,costcenterselectorComponent ],
    providers: [TravelService]
})

export class traveldocumentComponent implements OnInit {
    travels: any;
    
    current: ITravel={id: -1
        , destination: ''
        , manager: null
        , from: null
        , to: null
        , type: null
        , purpose: {id: 2, name: 'PROJECT'} 
        , user:null
        , reason: null
        , costcenter: {id: 3, name: 'ALR-IT'}
    };

    constructor(private userContext: UserContextService,private service: TravelService, private router: Router, private route: ActivatedRoute){
    }

    ngOnInit(){
        // (+) converts string 'id' to a number
        let id = +this.route.snapshot.params['id'];
        let mode=this.route.snapshot.params['mode'];
        // console.log('Travel Document on Init');
        // console.log(id);
        // console.log(mode);
        this.travels=this.service.getTravels();
        if(id==0){
            this.current.id=0;
            this.current.destination='';
        }
    }
    onCancel(event: Event) {
        event.preventDefault();
        this.current.costcenter={id: 3, name: 'ALR-IT'};
    }

}