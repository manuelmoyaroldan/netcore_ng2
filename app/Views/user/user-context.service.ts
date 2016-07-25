import { Injectable }    from '@angular/core';
 
import { UserService }   from './user.service';
import {IUser} from '../shared/interfaces';


@Injectable()
export class UserContextService {
  user: IUser;
  name: string;
  role: string;
  loggedInSince: Date;

  constructor(private service: UserService) {
    this.loggedInSince = new Date();
    this.user=this.service.getUser();
  }

  loadUser(userId: number) {
    this.user=this.service.getUser();
    //let user = this.service.getUserById(userId);
    //this.name = user.name;
    //this.role = user.role;
    //this.loggerService.logDebug('loaded User');
  }
}