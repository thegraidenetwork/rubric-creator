import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { BaseRubricComponent } from '../base/base-rubric.component';

@Component({
    selector: 'rc-edit-rubric-table-head,[rc-edit-rubric-table-head]',
    styleUrls: ['./edit-rubric-table-head.component.css'],
    templateUrl: './edit-rubric-table-head.component.html',
})
export class EditRubricTableHeadComponent extends BaseRubricComponent {
    constructor(protected store: Store<RubricsStateInterface>) {
        super(store);
    }
}
