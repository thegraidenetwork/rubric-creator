import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { BaseEditRubricComponent } from '../base/base-edit-rubric.component';

@Component({
    selector: 'rc-edit-rubric-table-bottom',
    styleUrls: ['./edit-rubric-table-bottom.component.css'],
    templateUrl: './edit-rubric-table-bottom.component.html',
})
export class EditRubricTableBottomComponent extends BaseEditRubricComponent implements OnInit {
    constructor(
        protected store: Store<RubricsStateInterface>
    ) {
        super(store);
    }

    public addComponent(): void {
        console.log('Add component');
        // this.store.dispatch(new AddComponentToCurrentRubric());
    }
}
