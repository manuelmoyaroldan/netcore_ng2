import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {TravelService} from '../shared/travel.service';

@Component({
    selector: 'travel-document',
    templateUrl: 'app/Views/travel/travel-document/travel-document.component.html',
    providers: [TravelService]
})

export class traveldocumentComponent implements OnInit {
    
    travels: string;

    constructor(private service: TravelService, private router: Router, private route: ActivatedRoute){
    }

    ngOnInit(){
        // (+) converts string 'id' to a number
        let id = +this.route.snapshot.params['id'];
        let mode=this.route.snapshot.params['mode'];
        console.log('Travel Document on Init');
        console.log(id);
        console.log(mode);
        this.travels=this.service.getTravels();
    }

}