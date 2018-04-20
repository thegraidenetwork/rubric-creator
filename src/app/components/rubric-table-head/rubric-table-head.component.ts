import { Component } from '@angular/core';
import { BaseRubricComponent } from '../base/base-rubric.component';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';

@Component({
    selector: 'rc-rubric-table-head,[rc-rubric-table-head]',
    styleUrls: ['./rubric-table-head.component.css'],
    templateUrl: './rubric-table-head.component.html',
})
export class RubricTableHeadComponent extends BaseRubricComponent {
    public constructor(protected store: Store<RubricsStateInterface>) {
        super(store);
    }
}
