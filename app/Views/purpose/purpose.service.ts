import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

import {ITravelPurpose} from '../shared/interfaces';

@Injectable()
export class PurposeService{
    
    purposes: ITravelPurpose[]=[];

    constructor(private http: Http){}

    getPurposes(){
        //this.purposes=[];
        this.purposes.push({id: 1, name: 'TRAINING'});
        this.purposes.push({id: 2, name: 'PROJECT'});
        this.purposes.push({id: 3, name: 'VISIT'});
        this.purposes.push({id: 4, name: 'TEST 01'});
        this.purposes.push({id: 5, name: 'TEST 02'});
        //this.selectedChange.emit(this.selected);
        return this.purposes;

    }

}