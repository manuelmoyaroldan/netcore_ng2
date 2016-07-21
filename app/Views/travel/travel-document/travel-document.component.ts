import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {TravelService} from '../shared/travel.service';
//import {ITravel} from '../../../Views/shared/interfaces';
import {ITravel} from '../../../Views/shared/interfaces';

import {UserContextService} from '../../user/user-context.service'


@Component({
    selector: 'travel-document',
    templateUrl: 'app/Views/travel/travel-document/travel-document.component.html',
    providers: [TravelService]
})

export class traveldocumentComponent implements OnInit {
    
    travels: string;
    
    current: ITravel={id: -1
        , destination: ''
        , manager: null
        , from: null
        , to: null
        , type: null
        , purpose: null
        , user:null
        , reason: null};

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

}