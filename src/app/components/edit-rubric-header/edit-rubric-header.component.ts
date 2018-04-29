import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { BaseEditRubricComponent } from '../base/base-edit-rubric.component';

@Component({
    selector: 'rc-edit-rubric-header',
    styleUrls: ['./edit-rubric-header.component.css'],
    templateUrl: './edit-rubric-header.component.html',
})
export class EditRubricHeaderComponent extends BaseEditRubricComponent {
    constructor(protected store: Store<RubricsStateInterface>) {
        super(store);
    }
}
