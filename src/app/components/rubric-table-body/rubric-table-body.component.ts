import { Component, Input } from '@angular/core';
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
    @Input() public responsive = true;

    public constructor(protected store: Store<RubricsStateInterface>) {
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
        if (this.responsive) {
            return {'min-width': '15em'};
        } else {
            return {width: this.getWidthPercentage()};
        }
    }

    private getWidthPercentage(): string {
        let maxLevelsCount = 1;
        if (this.rubric !== undefined && this.rubric.maxLevelsCount !== undefined) {
            maxLevelsCount = this.rubric.maxLevelsCount + 1;
        }

        return `${(MAXIMUM_WIDTH / maxLevelsCount)}%`;
    }
}
