import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { SetPageTitle } from '../../store/rubrics.actions';

@Component({
    selector: 'rc-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    private title: string = 'Rubric Creator by The Graide Network';

    constructor(private store: Store<RubricsStateInterface>) {}

    public ngOnInit(): void {
        this.store.dispatch(new SetPageTitle(this.title));
    }
}
