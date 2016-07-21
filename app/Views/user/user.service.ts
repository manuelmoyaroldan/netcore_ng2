import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  getUserById(userId: number): any {
    return {name: 'mmo107', role: 'Admin'};
  }
}
