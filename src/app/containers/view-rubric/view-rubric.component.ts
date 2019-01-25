import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { ActivatedRoute, Params } from '@angular/router';
import { GetRubric, SetPageTitle } from '../../store/rubrics.actions';
import { BaseRubricComponent } from '../../components/base/base-rubric.component';
import { selectCurrentRubric, selectPageTitle } from '../../store/rubrics.selectors';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { takeUntil } from 'rxjs/operators';

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
        this.route.params.takeUntil(this.ngUnsubscribe).subscribe((params: Params) => {
            this.store.dispatch(new GetRubric(params['rubric_uuid'] as string));
        });

        combineLatest(
            this.store.pipe(select(selectCurrentRubric)),
            this.store.pipe(select(selectPageTitle))
        )
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(([currentRubric, pageTitle]: [RubricInterface | undefined, string]) => {
            const title = currentRubric !== undefined ?
                `${currentRubric.name} | Rubric Creator` :
                getInitialState().rubrics.pageTitle;
            if (pageTitle !== title) {
                this.store.dispatch(new SetPageTitle(title));
            }
        });
    }

}
