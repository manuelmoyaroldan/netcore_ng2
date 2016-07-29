import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_INPUT_DIRECTIVES, MdInput} from '@angular2-material/input';
import { MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';

import {ITravel, IAdvance} from '../../shared/interfaces';

@Component({
    selector: 'travel-document-step3',
    templateUrl: 'app/Views/travel/travel-document/travel-document-step3.component.html',
    directives: [MD_LIST_DIRECTIVES, MD_INPUT_DIRECTIVES, MdInput, MD_ICON_DIRECTIVES],
    providers: [MdIconRegistry]
})

export class traveldocumentstep3Component {
    @Input() current: ITravel;
    @Input() step: number;
    @Output() stepChange = new EventEmitter<number>();

    selected: IAdvance;
    isEdition: boolean = false;

    constructor() { }

    ngOnInit() {
        this.selected = { id: 0 };
        if (this.current.advance == undefined) {
            this.current.advance = [];
        }
    } 

    clickYesAdvance() {
        this.isEdition = true;
    }
    clickNoAdvance() {
        this.step = this.step + 1;
        this.stepChange.emit(this.step);
    }
    clickSaveAdvance() {
        this.current.advance.push(this.selected);
        this.step = this.step + 1;
        this.stepChange.emit(this.step);
        this.isEdition = false;
    }
    clickCancelAdvance() {
        this.isEdition = false;
    }
    clickNewAdvance(){
        this.isEdition=true;
        this.selected = { id: 0 };
    }

}
