import {Component} from '@angular/core';

import {InputText} from 'primeng/primeng';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';


@Component({
    selector: 'test-component',
    template: '<div>testcomponent <input type="text" pInputText/><br><button md-button>FLAT</button></div> ',
    directives: [InputText,MD_BUTTON_DIRECTIVES]
})

export class testComponent{
    
}