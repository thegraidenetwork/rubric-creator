import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { ActivatedRoute, Params } from '@angular/router';
import { GetRubric, SetPageTitle } from '../../store/rubrics.actions';
import { BaseRubricComponent } from '../../components/base/base-rubric.component';
import { selectCurrentRubric, selectPageTitle } from '../../store/rubrics.selectors';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { filter, map, takeUntil, tap } from 'rxjs/operators';

@Component({
    selector: 'rc-view-rubric',
    templateUrl: './view-rubric.component.html',
})
export class ViewRubricComponent extends BaseRubricComponent implements OnInit {

    constructor(
        protected store: Store<RubricsStateInterface>,
        private route: ActivatedRoute
    ) {
        super(store);
    }

    public ngOnInit(): void {
        super.ngOnInit();
        this.route.params.pipe(takeUntil(this.ngUnsubscribe)).subscribe((params: Params) => {
            this.store.dispatch(new GetRubric(params['rubric_uuid'] as string));
        });

        combineLatest([
            this.store.pipe(
                select(selectCurrentRubric),
                map(currentRubric => currentRubric !== undefined ?
                    `${currentRubric.name} | Rubric Creator` :
                    getInitialState().rubrics.pageTitle)
            ),
            this.store.pipe(select(selectPageTitle)),
        ])
            .pipe(
                takeUntil(this.ngUnsubscribe),
                filter(([titleBasedOnCurrentRubric, pageTitle]: [string, string]) => titleBasedOnCurrentRubric !== pageTitle),
                map(([titleBasedOnCurrentRubric, pageTitle]: [string, string]) => titleBasedOnCurrentRubric),
                tap(titleBasedOnCurrentRubric => this.store.dispatch(new SetPageTitle(titleBasedOnCurrentRubric)))
            )
            .subscribe();
    }

}
