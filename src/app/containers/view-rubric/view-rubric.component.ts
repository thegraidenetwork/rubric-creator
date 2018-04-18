import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { DECREMENT, INCREMENT, RESET } from '../../reducers/rubric.reducer';

@Component({
    selector: 'rc-view-rubric',
    templateUrl: './view-rubric.component.html',
    styleUrls: ['./view-rubric.component.css']
})
export class ViewRubricComponent implements OnInit {

    constructor(private store: Store<{ rubric: number }>) {
        this.store.pipe(select('rubric')).subscribe(updated => console.log(updated));
    }

    public ngOnInit(): void {
        this.store.dispatch({ type: INCREMENT });
        this.store.dispatch({ type: DECREMENT });
        // this.store.dispatch({ type: RESET });
    }

}
