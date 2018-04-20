import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseRubricComponent } from '../base/base-rubric.component';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { ComponentInterface } from '../../object-interfaces/component.interface';

const MAXIMUM_WIDTH = 100;

@Component({
    selector: 'rc-rubric-table-body,[rc-rubric-table-body]',
    styleUrls: ['./rubric-table-body.component.css'],
    templateUrl: './rubric-table-body.component.html',
})
export class RubricTableBodyComponent extends BaseRubricComponent {
    public constructor(protected store: Store<RubricsStateInterface>) {
        super(store);
    }

    public emptyElements(component: ComponentInterface): Array<any> {
        return new Array(this.rubric.maxLevelsCount - component.levels.length);
    }

    public componentWidth(): string {
        return `${(MAXIMUM_WIDTH / (this.rubric.maxLevelsCount + 1))}%`;
    }
}
