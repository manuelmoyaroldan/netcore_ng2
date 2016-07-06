import {Component} from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router'; 

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    //templateUrl: '/app/app.html',
    directives: [ROUTER_DIRECTIVES]
 
    //template: '<div>app</div>',
    //template: `<h2> My Skills are : {{mySkill }}</h2>`
})

export class AppComponent {
 
     
}