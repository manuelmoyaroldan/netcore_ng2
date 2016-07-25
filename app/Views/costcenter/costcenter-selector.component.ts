import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

import {CostcenterService} from './costcenter.service';
import {ICostCenter} from '../shared/interfaces';

@Component({
    selector: 'costcenter-selector',  
    templateUrl: 'app/Views/costcenter/costcenter-selector.component.html',
    providers: [CostcenterService]
})

export class costcenterselectorComponent{
    @Input() selected: ICostCenter;
    @Output() selectedChange = new  EventEmitter<ICostCenter>();

    costcenters: ICostCenter[];

    constructor(private service: CostcenterService){}

    ngOnInit(){
        this.costcenters=this.service.getCostCenters();
        //this.selected=this.costcenters.find(c=> c.id===this.selected.id);
    }

    onChange(value){
        //this.costcenters.find(c=> c.id=value);
        //alert(JSON.stringify(this.costcenters.find((c: ICostCenter)=> c.id===value)));
        //alert(JSON.stringify(value));
        //this.selectedChange.emit(this.costcenters.find((c: ICostCenter)=> c.id===value));
        //console.log(this.costcenters.find((c: ICostCenter)=> c.id===value));
        //let temp:ICostCenter=this.costcenters.find(c=> c.id===value);
        //this.selectedChange.emit(temp);
        //console.log(temp);
        //console.log(this.costcenters); 
        //console.log(this.costcenters.find(c=> c.id=value));
        //alert(this.costcenters.findIndex(c=> c.id=value));
        this.selectedChange.emit(value);
        console.log("onchange ->"+value);
        //this.selectedChange.emit();
        //let temp:ICostCenter=this.costcenters.find(c=> c.id===value);
    }

}