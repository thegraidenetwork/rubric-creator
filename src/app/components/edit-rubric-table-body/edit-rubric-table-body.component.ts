import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { ComponentInterface } from '../../object-interfaces/component.interface';
import { BaseEditRubricComponent } from '../base/base-edit-rubric.component';

@Component({
    selector: 'rc-edit-rubric-table-body,[rc-edit-rubric-table-body]',
    styleUrls: ['./edit-rubric-table-body.component.css'],
    templateUrl: './edit-rubric-table-body.component.html',
})
export class EditRubricTableBodyComponent extends BaseEditRubricComponent {
    constructor(protected store: Store<RubricsStateInterface>) {
        super(store);
    }

    public emptyElements(component: ComponentInterface): Array<number> {
        if (
            this.rubric !== undefined &&
            this.rubric.maxLevelsCount !== undefined
        ) {
            return new Array(this.rubric.maxLevelsCount - component.levels.length);
        }

        return [];
    }

    public componentWidth(): object {
        return {'min-width': '15em'};
    }
}
