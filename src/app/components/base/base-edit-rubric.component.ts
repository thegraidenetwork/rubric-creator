import { OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { BaseRubricComponent } from './base-rubric.component';
import { UpdateCurrentRubric } from '../../store/rubrics.actions';
import { selectSaving } from '../../store/rubrics.selectors';

export abstract class BaseEditRubricComponent extends BaseRubricComponent implements OnInit {
    public saving: boolean = false;

    protected constructor(protected store: Store<RubricsStateInterface>) {
        super(store);
    }

    public ngOnInit(): void {
        this.store.takeUntil(this.ngUnsubscribe)
            .pipe(select(selectSaving))
            .subscribe((saving: boolean) => this.saving = saving);
        super.ngOnInit();
    }

    public updateRubric(): void {
        if (this.rubric !== undefined) {
            this.rubric.private = true;
            this.store.dispatch(new UpdateCurrentRubric(this.rubric));
        }
    }
}
