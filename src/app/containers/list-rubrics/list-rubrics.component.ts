import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { BaseComponent } from '../../components/base/base.component';
import { GetRubrics, SetPageTitle } from '../../store/rubrics.actions';

@Component({
    selector: 'rc-list-rubrics',
    templateUrl: './list-rubrics.component.html',
})
export class ListRubricsComponent extends BaseComponent implements OnInit {
    public rubrics: Array<RubricInterface> | undefined = undefined;
    private title: string = 'All Rubrics | Rubric Creator';

    constructor(private store: Store<RubricsStateInterface>) {
        super();
    }

    public ngOnInit(): void {
        this.store.takeUntil(this.ngUnsubscribe)
            .pipe(select('rubrics'))
            .subscribe((state: RubricsStateInterface) => this.rubrics = state.allRubrics);

        this.store.dispatch(new GetRubrics());
        this.store.dispatch(new SetPageTitle(this.title));
    }

}
