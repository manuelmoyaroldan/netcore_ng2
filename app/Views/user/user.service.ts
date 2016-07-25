import { Injectable } from '@angular/core';

import {IUser} from '../shared/interfaces';

@Injectable()
export class UserService {

  getUserById(userId: number): any {
    return {name: 'mmo107', role: 'Admin'};
  }
  getUser(): IUser{
    let temp:IUser={id: 1, name: "MMO107"};
    return temp;
  }
}
