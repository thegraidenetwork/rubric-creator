import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { ActivatedRoute, Params } from '@angular/router';
import { GetRubric, SetBreadcrumbs } from '../../store/rubrics.actions';
import { BaseRubricComponent } from '../../components/base/base-rubric.component';
import { BreadcrumbInterface } from '../../object-interfaces/breadcrumb.interface';

@Component({
    selector: 'rc-view-rubric',
    styleUrls: ['./view-rubric.component.css'],
    templateUrl: './view-rubric.component.html',
})
export class ViewRubricComponent extends BaseRubricComponent implements OnInit {
    private breadcrumbs: Array<BreadcrumbInterface> = [
        {
            path: '/',
            selected: false,
            text: 'Home',
        },
        {
            path: '/rubrics',
            selected: false,
            text: 'Rubrics',
        },
        {
            path: undefined,
            selected: true,
            text: 'View Rubric',
        },
    ];

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
        this.store.dispatch(new SetBreadcrumbs(this.breadcrumbs));
    }

}
