import {Component} from '@angular/core';

import {InputText} from 'primeng/primeng';


@Component({
    selector: 'test-component',
    template: '<div>Home <input type="text" pInputText/></div>',
    directives: [InputText]
})

export class testComponent{
    
}