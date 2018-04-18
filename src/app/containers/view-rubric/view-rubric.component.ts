import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { SELECT_RUBRIC } from '../../store/rubrics.reducer';
import { StateInterface } from '../../store/rubrics.state';

@Component({
    selector: 'rc-view-rubric',
    templateUrl: './view-rubric.component.html',
    styleUrls: ['./view-rubric.component.css']
})
export class ViewRubricComponent implements OnInit {

    constructor(private store: Store<StateInterface>) {
        this.store.pipe(select('rubrics')).subscribe(updated => console.log(updated));
    }

    public ngOnInit(): void {
        this.store.dispatch({ type: SELECT_RUBRIC });
    }

}
