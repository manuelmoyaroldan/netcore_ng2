import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {ITravelType} from '../shared/interfaces'

@Injectable()
export class TraveltypeService{

    list: ITravelType[]=[];

    constructor(){}

    getAll(): ITravelType[]{
        this.list.push({id: 1, name: 'LOCAL'});
        this.list.push({id: 2, name: 'FOREIGN'});

        return this.list;
    }




}
