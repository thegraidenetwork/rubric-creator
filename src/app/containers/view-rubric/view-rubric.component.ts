import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { RubricInterface } from '../../interfaces/rubric.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseComponent } from '../../components/base/base.component';
import { GetRubric } from '../../store/rubrics.actions';

@Component({
    selector: 'rc-view-rubric',
    styleUrls: ['./view-rubric.component.css'],
    templateUrl: './view-rubric.component.html',
})
export class ViewRubricComponent extends BaseComponent implements OnInit {
    public rubric: RubricInterface = undefined;

    constructor(
        private store: Store<RubricsStateInterface>,
        private route: ActivatedRoute
    ) {
        super();
    }

    public ngOnInit(): void {
        this.route.params.takeUntil(this.ngUnsubscribe).subscribe((params: Params) => {
            this.store.dispatch(new GetRubric(params['rubric_uuid'] as string));
        });

        this.store.pipe(select('rubrics')).subscribe((state: RubricsStateInterface) => {
            console.log(state);
            this.rubric = state.currentRubric;
        });
    }

}
