import { Component } from '@angular/core';
import { BaseRubricComponent } from '../base/base-rubric.component';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { Store } from '@ngrx/store';

@Component({
    selector: 'rc-rubric-view-mobile',
    styleUrls: ['./rubric-view-mobile.component.css'],
    templateUrl: './rubric-view-mobile.component.html',
})
export class RubricViewMobileComponent extends BaseRubricComponent {

    public constructor(protected store: Store<RubricsStateInterface>) {
        super(store);
    }

}
