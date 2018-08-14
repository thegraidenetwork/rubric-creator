import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { BaseRubricComponent } from '../base/base-rubric.component';

@Component({
    selector: 'rc-rubric-header',
    styleUrls: ['./rubric-header.component.css'],
    templateUrl: './rubric-header.component.html',
})
export class RubricHeaderComponent extends BaseRubricComponent implements OnInit {
    constructor(protected store: Store<RubricsStateInterface>) {
        super(store);
    }
}
