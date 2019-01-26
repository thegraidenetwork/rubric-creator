import { map, takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { BaseRubricComponent } from '../../components/base/base-rubric.component';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { GetRubric, SetPageTitle } from '../../store/rubrics.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'rc-create-rubric',
    templateUrl: './edit-rubric.component.html',
})
export class EditRubricComponent extends BaseRubricComponent implements OnInit {
    private title: string = 'Create New Rubric | Rubric Creator';

    constructor(
        protected store: Store<RubricsStateInterface>,
        private route: ActivatedRoute
    ) {
        super(store);
    }

    public ngOnInit(): void {
        this.store.dispatch(new SetPageTitle(this.title));
        this.route.params.pipe(
            takeUntil(this.ngUnsubscribe),
            map(params => this.store.dispatch(new GetRubric(params.rubric_uuid))))
            .subscribe();
        super.ngOnInit();
    }
}
