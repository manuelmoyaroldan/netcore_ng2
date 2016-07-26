import {Component} from '@angular/core';

@Component({
    selector: 'travel-component',
    templateUrl: 'app/Views/travel/travel.component.html',
    styleUrls: ['app/Views/travel/travel.component.css'],
})

export class travelComponent{

    step: number=1;

    constructor(){}

    prev(){
        this.step=this.step-1;
    }
    next(){
        this.step=this.step+1;
    }
    
}