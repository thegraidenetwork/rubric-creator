import { takeUntil } from 'rxjs/operators';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { OnInit } from '@angular/core';
import { BaseComponent } from './base.component';
import { select, Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { selectConnected, selectCurrentRubric } from '../../store/rubrics.selectors';

export abstract class BaseRubricComponent extends BaseComponent implements OnInit {
    public rubric: RubricInterface | undefined;
    public connected: boolean = true;

    protected constructor(protected store: Store<RubricsStateInterface>) {
        super();
    }

    public ngOnInit(): void {
        this.store
            .pipe(
                takeUntil(this.ngUnsubscribe),
                select(selectCurrentRubric)
            )
            .subscribe((currentRubric: RubricInterface) => {
                this.rubric = currentRubric;
            });

        this.store
            .pipe(
                takeUntil(this.ngUnsubscribe),
                select(selectConnected)
            )
            .subscribe((connected: boolean) => {
                this.connected = connected;
            });
    }
}
