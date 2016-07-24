import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {ICostCenter} from '../shared/interfaces';

@Injectable()
export class CostcenterService{
    
    costcenters: ICostCenter[]=[];
    
    constructor(private http: Http){}

    getCostCenters(): ICostCenter[]{
        this.costcenters.push({id: 1, name: 'ALR-FINANCE'});
        this.costcenters.push({id: 2, name: 'ALR-PROJECT'});
        this.costcenters.push({id: 3, name: 'ALR-IT'});
        this.costcenters.push({id: 4, name: 'ALR-TECHNICAL'});
        this.costcenters.push({id: 5, name: 'ALR-OPS'});
        
        return this.costcenters;
    }

}