import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {ITransportWay} from '../shared/interfaces';

@Injectable()
export class travelwayService{

    list: ITransportWay[]=[];
    
    constructor(){}

    getAll(): ITransportWay[]{
        
        this.list.push({id: 1, name: 'FERRY'});
        this.list.push({id: 2, name: 'TRAIN'}); 
        this.list.push({id: 3, name: 'PLANE'});
        this.list.push({id: 4, name: 'CAR'});
        
        return this.list;
    }

}