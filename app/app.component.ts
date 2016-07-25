import {Component} from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router'; 

import { UserContextService } from './Views/user/user-context.service';
import { UserService }        from './Views/user/user.service';

@Component({
    selector: 'my-app',
    //template: '<router-outlet></router-outlet>',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserContextService, UserService]
    //template: '<div>app</div>',
    //template: `<h2> My Skills are : {{mySkill }}</h2>`
})

export class AppComponent {

    private userId: number = 1;

    constructor(public userContext: UserContextService) {
        //userContext.loadUser(this.userId);
        //logger.logInfo('AppComponent initialized');
    } 
     
}