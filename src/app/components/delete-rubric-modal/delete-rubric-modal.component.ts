import { Component, Input, OnInit } from '@angular/core';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { BaseComponent } from '../base/base.component';
import { DeleteRubric } from '../../store/rubrics.actions';

@Component({
    selector: 'rc-delete-rubric-modal',
    styleUrls: ['./delete-rubric-modal.component.css'],
    templateUrl: './delete-rubric-modal.component.html',
})
export class DeleteRubricModalComponent extends BaseComponent implements OnInit {
    @Input() public rubric: RubricInterface;
    public deleting: boolean = false;

    constructor(
        public activeModal: NgbActiveModal,
        protected store: Store<RubricsStateInterface>
    ) {
        super();
    }

    public ngOnInit(): void {
        this.store.takeUntil(this.ngUnsubscribe)
            .pipe(select('rubrics'))
            .subscribe((state: RubricsStateInterface) => this.deleting = state.deleting);
    }

    public deleteRubric(): void {
        this.store.dispatch(new DeleteRubric(this.rubric.uuid));
        this.activeModal.close('Rubric deleted');
    }
}
