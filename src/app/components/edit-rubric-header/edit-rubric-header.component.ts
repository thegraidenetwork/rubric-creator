import { Component } from '@angular/core';
import { BaseRubricComponent } from '../base/base-rubric.component';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';

@Component({
    selector: 'rc-edit-rubric-header',
    styleUrls: ['./edit-rubric-header.component.css'],
    templateUrl: './edit-rubric-header.component.html',
})
export class EditRubricHeaderComponent extends BaseRubricComponent {
    constructor(protected store: Store<RubricsStateInterface>) {
        super(store);
    }
}
