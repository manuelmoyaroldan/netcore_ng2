import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class TravelService{
    
    constructor(private http: Http){}

    getTravels(){
        return 'values';
    }


}

