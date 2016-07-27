import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {TravelService} from '../shared/travel.service';
//import {ITravel} from '../../../Views/shared/interfaces';
import {ITravel, ITravelPurpose, ICostCenter} from '../../../Views/shared/interfaces';

import {UserContextService} from '../../user/user-context.service'

import {purposeselectorComponent} from '../../purpose/purpose-selector.component';
import {travelwayselectorComponent} from '../../travelway/travelway-selector.component';
import {costcenterselectorComponent} from '../../costcenter/costcenter-selector.component';
import {traveltypeselectorComponent} from '../../traveltype/traveltype-selector.component';

import {traveldocumentstep1Component} from './travel-document-step1.component';
import {traveldocumentstep2Component} from './travel-document-step2.component';

@Component({
    selector: 'travel-document',
    templateUrl: 'app/Views/travel/travel-document/travel-document.component.html',
    directives: [purposeselectorComponent, travelwayselectorComponent,costcenterselectorComponent, traveltypeselectorComponent, traveldocumentstep1Component, traveldocumentstep2Component ],
    providers: [TravelService]
})

export class traveldocumentComponent implements OnInit {
    step:number=1;
    travels: any;
    
    current: ITravel={id: -1
        , destination: 'TANGER'
        , manager: null
        , from: null
        , to: null
        , type: null
        , purpose: {id: 2, name: 'PROJECT'} 
        , id_purpose: 2
        , user:null
        , reason: null
        , id_costcenter: 3
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
            let mytemp: ICostCenter={id: 3, name: 'ALR-IT'}; 
            this.current.costcenter=mytemp;
            this.current.user=this.userContext.user;
            this.current.manager=this.userContext.user.manager;
        }
    }
    onCancel(event: Event) {
        event.preventDefault();
        let mytemp: ICostCenter={id: 3, name: 'ALR-IT'}; 
        //this.current.costcenter={id: 3, name: 'ALR-IT'};
        this.current.costcenter=mytemp;
        console.log("click ->"+this.current.costcenter);
    }

    clickPrev(){
        this.step=this.step-1;
    } 
    clickNext(){
        this.step=this.step+1;
    }



}