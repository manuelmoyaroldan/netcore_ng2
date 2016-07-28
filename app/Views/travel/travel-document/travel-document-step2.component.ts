import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {ITravel, ITravelPlan} from '../../shared/interfaces';
import {travelwayselectorComponent} from '../../travelway/travelway-selector.component';

@Component({
    selector: 'travel-document-step2',
    templateUrl: 'app/Views/travel/travel-document/travel-document-step2.component.html',
    directives: [travelwayselectorComponent]
})

export class traveldocumentstep2Component {
    //*****Attributes*****
    @Input() current: ITravel;
    @Input() step: number;
    @Output() stepChange = new EventEmitter<number>();
    //*****Variables****
    selected: ITravelPlan;
    isEdition: boolean = false;
    isTravelEdition: boolean = false;
    isHotelEdition: boolean = false;

    constructor() {
    }

    ngOnInit() {
        this.selected = { id: 0, hotel_yn: false };
        //Initialize travelPlan List
        if (this.current.travelPlan == undefined) {
            this.current.travelPlan = [];
        }
    }

    //******************************Events*****************************************
    clickSaveTravelPlan() {
        this.selected.travel_yn = true;
        this.isEdition = true;
        this.isTravelEdition = false;
        this.isHotelEdition = true;
    }
    clickCancelTravelPlan() {
        //this.selected.travel_yn = true;
        this.isEdition = false;
        this.isTravelEdition = false;
        //this.isHotelEdition = true;
    }
    clickCancelHotel(){
        this.isEdition=true;
        this.selected.hotel_yn=false;
    }
    clickSaveHotel() {
        if (this.selected.hotel_yn || this.selected.travel_yn) {
            this.current.travelPlan.push(this.selected);
            this.isTravelEdition = false;
            this.isHotelEdition = false;
            this.isEdition=false;

            //next tab
            this.step = this.step + 1;
            this.stepChange.emit(this.step);
        }
    }
    clickYesTravelPlan() {
        this.isEdition = true;
        this.isTravelEdition = true;
    }
    clickNoTravelPlan() {
        this.selected.travel_yn = false;
        this.isHotelEdition = true;
        //this.isEdition=false;
    }
    clickYesHotel() {
        this.isEdition = true;
        this.selected.hotel_yn = true;
    }
    clickNoHotel() {
        this.isEdition = false;
        this.isHotelEdition = false;
        this.selected.hotel_yn = false;
        if (this.selected.travel_yn) {
            this.current.travelPlan.push(this.selected);
        }
        //next tab
        this.step = this.step + 1;
        this.stepChange.emit(this.step);
    }
    clickAddTravel(){
        this.selected = { id: 0, hotel_yn: false };
        this.isEdition=true;
        this.isTravelEdition=true;
    }
}
