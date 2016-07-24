import {Component, OnInit, Input, EventEmitter, Output, DoCheck } from '@angular/core';

import {Dropdown} from 'primeng/primeng';

import {PurposeService} from './purpose.service';
import {ITravelPurpose,ITravel} from '../shared/interfaces';

@Component({ 
    selector: 'purpose-selector',
    templateUrl: 'app/Views/purpose/purpose-selector.component.html',
    providers: [PurposeService]
})

export class purposeselectorComponent{
    @Input() selected: ITravelPurpose;
    @Input() test: String;
    @Output() testChange = new  EventEmitter();
    @Output() selectedChange = new  EventEmitter();
     
    purposes: ITravelPurpose[];
    
    constructor(private service:PurposeService){
    }
    ngOnInit(){
        //this.selectedPurpose={id: 3, name: 'VISIT'};
        // this.purposes=[];
        // this.purposes.push({id: 1, name: 'TRAINING'});
        // this.purposes.push({id: 2, name: 'PROJECT'});
        // this.purposes.push({id: 3, name: 'VISIT'});
        // this.purposes.push({id: 4, name: 'TEST 01'});
        // this.purposes.push({id: 5, name: 'TEST 02'});
        //this.selectedChange.emit(this.selected);
        //this.selectedPurpose=this.purposes[3];
        this.purposes=this.service.getPurposes();
    }
    //  onChange() {
    //   console.log(this.selectedPurpose);
    // }
    // onChanges(newValue) {
    //     this.test = newValue;
    //     this.testModel.emit(newValue);
    //     console.log(newValue);
    // }
    // onChangetest() {
    //   console.log(this.test);
    // }

}