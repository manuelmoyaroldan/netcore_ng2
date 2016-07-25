import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

import {TraveltypeService} from './traveltype.service';
import {ITravelType} from '../shared/interfaces';

@Component({
    selector: 'traveltype-selector',
    templateUrl: 'app/Views/traveltype/traveltype-selector.component.html',
    providers: [TraveltypeService]
})

export class traveltypeselectorComponent{
    @Input() selected: ITravelType;
    @Output() selectedChange= new EventEmitter<ITravelType>();

    list: ITravelType[];
    
    constructor(private service: TraveltypeService){}

    ngOnInit(){
        this.list=this.service.getAll();
    }
 
    onChange(value){
        this.selectedChange.emit(value);
    }

}