import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { BaseComponent } from '../../components/base/base.component';
import { GetRubrics, SetBreadcrumbs } from '../../store/rubrics.actions';
import { BreadcrumbInterface } from '../../object-interfaces/breadcrumb.interface';

@Component({
    selector: 'rc-list-rubrics',
    templateUrl: './list-rubrics.component.html',
})
export class ListRubricsComponent extends BaseComponent implements OnInit {
    public rubrics: Array<RubricInterface> | undefined = undefined;
    private breadcrumbs: Array<BreadcrumbInterface> = [
        {
            path: '/',
            selected: false,
            text: 'Home',
        },
        {
            path: undefined,
            selected: true,
            text: 'Rubrics',
        },
    ];

    constructor(private store: Store<RubricsStateInterface>) {
        super();
    }

    public ngOnInit(): void {
        this.store.takeUntil(this.ngUnsubscribe)
            .pipe(select('rubrics'))
            .subscribe((state: RubricsStateInterface) => this.rubrics = state.allRubrics);

        this.store.dispatch(new GetRubrics());
        this.store.dispatch(new SetBreadcrumbs(this.breadcrumbs));
    }

}
