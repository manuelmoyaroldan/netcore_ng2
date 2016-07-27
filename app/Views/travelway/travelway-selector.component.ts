import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {ITransportWay} from '../shared/interfaces';
import {travelwayService} from './travelway.service';

@Component({
    selector: 'travelway-selector',
    templateUrl: 'app/Views/travelway/travelway-selector.component.html',
    providers: [travelwayService]
})

export class travelwayselectorComponent{
    @Input() selected: ITransportWay;
    @Input() idSelected: number;
    @Output() selectedChange = new  EventEmitter<ITransportWay>();
    @Output() idSelectedChange = new  EventEmitter<number>();
    

    list: ITransportWay[];

    constructor(private service: travelwayService){}

    ngOnInit(){
        this.list=this.service.getAll();
    }

    onChange(value){
        this.idSelectedChange.emit(value);
        this.selectedChange.emit(this.list.find(c=> c.id===value));
    }

}