import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { SetPageTitle } from '../../store/rubrics.actions';

@Component({
    selector: 'rc-page-not-found',
    templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent implements OnInit {
    private title: string = 'Page Not Found | Rubric Creator';

    constructor(private store: Store<RubricsStateInterface>) {}

    public ngOnInit(): void {
        this.store.dispatch(new SetPageTitle(this.title));
    }
}
