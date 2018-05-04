import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { BaseEditRubricComponent } from '../base/base-edit-rubric.component';
import { ComponentInterface } from '../../object-interfaces/component.interface';
import { emptyComponentObject } from '../../data-services/data/empty-component.object';
import { cloneComponentObject } from '../../functions/clone-component-object.function';

@Component({
    selector: 'rc-edit-rubric-table-bottom',
    styleUrls: ['./edit-rubric-table-bottom.component.css'],
    templateUrl: './edit-rubric-table-bottom.component.html',
})
export class EditRubricTableBottomComponent extends BaseEditRubricComponent implements OnInit {
    constructor(
        protected store: Store<RubricsStateInterface>
    ) {
        super(store);
    }

    public addComponent(): void {
        if (this.rubric !== undefined && this.rubric.components !== undefined) {
            this.rubric.components.push(this.getLastComponent());
            this.updateRubric();
        }
    }

    private getLastComponent(): ComponentInterface {
        if (
            this.rubric !== undefined &&
            this.rubric.components !== undefined &&
            this.rubric.components.length > 0
        ) {
            return cloneComponentObject(this.rubric.components[this.rubric.components.length - 1]);
        }

        return emptyComponentObject;
    }
}
