import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseComponent } from '../../components/base/base.component';
import { GetRubric } from '../../store/rubrics.actions';
import { ComponentInterface } from '../../object-interfaces/component.interface';

const MAXIMUM_WIDTH = 100;

@Component({
    selector: 'rc-view-rubric',
    styleUrls: ['./view-rubric.component.css'],
    templateUrl: './view-rubric.component.html',
})
export class ViewRubricComponent extends BaseComponent implements OnInit {
    public rubric: RubricInterface = undefined;

    constructor(
        private store: Store<RubricsStateInterface>,
        private route: ActivatedRoute
    ) {
        super();
    }

    public ngOnInit(): void {
        this.route.params.takeUntil(this.ngUnsubscribe).subscribe((params: Params) => {
            this.store.dispatch(new GetRubric(params['rubric_uuid'] as string));
        });

        this.store.takeUntil(this.ngUnsubscribe)
            .pipe(select('rubrics'))
            .subscribe((state: RubricsStateInterface) => this.rubric = state.currentRubric);
    }

    public downloadRubric(): false {
        return false;
    }

    public get maxLevelsCount(): number {
        if (this.rubric.components !== undefined && this.rubric.components.length > 0) {
            return Math.max(...this.rubric.components.map(c => c.levels.length));
        }

        return 0;
    }

    public emptyElements(component: ComponentInterface): Array<any> {
        return new Array(this.maxLevelsCount - component.levels.length);
    }

    public componentWidth(): string {
        return `${(MAXIMUM_WIDTH / (this.maxLevelsCount + 1))}%`;
    }

}
