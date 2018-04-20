import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { ActivatedRoute, Params } from '@angular/router';
import { GetRubric } from '../../store/rubrics.actions';
import { BaseRubricComponent } from '../../components/base/base-rubric.component';

@Component({
    selector: 'rc-view-rubric',
    styleUrls: ['./view-rubric.component.css'],
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
    }

}
