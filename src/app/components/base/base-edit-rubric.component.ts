import { takeUntil } from 'rxjs/operators';
import { OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { BaseRubricComponent } from './base-rubric.component';
import { UpdateCurrentRubric } from '../../store/rubrics.actions';

export abstract class BaseEditRubricComponent extends BaseRubricComponent implements OnInit {
    public saving: boolean = false;

    protected constructor(protected store: Store<RubricsStateInterface>) {
        super(store);
    }

    public ngOnInit(): void {
        this.store.pipe(takeUntil(this.ngUnsubscribe))
            .pipe(select('rubrics'))
            .subscribe((state: RubricsStateInterface) => this.saving = state.saving);
        super.ngOnInit();
    }

    public updateRubric(): void {
        if (this.rubric !== undefined) {
            this.rubric.private = true;
            this.store.dispatch(new UpdateCurrentRubric(this.rubric));
        }
    }
}
