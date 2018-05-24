import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { BaseComponent } from '../base/base.component';

@Component({
    selector: 'rc-create-rubric-button',
    templateUrl: './create-rubric-button.component.html',
})
export class CreateRubricButtonComponent extends BaseComponent implements OnInit {
    public connected: boolean = true;

    constructor(private store: Store<RubricsStateInterface>) {
        super();
    }

    public ngOnInit(): void {
        this.store.takeUntil(this.ngUnsubscribe)
            .pipe(select('rubrics'))
            .subscribe((state: RubricsStateInterface) => this.connected = state.connected);
    }
}
