import { Component, OnInit } from '@angular/core';
import { BaseRubricComponent } from '../../components/base/base-rubric.component';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { CreateRubric, GetRubric } from '../../store/rubrics.actions';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { ComponentInterface } from '../../object-interfaces/component.interface';

function _isBlankOrEmpty(input: string | undefined): boolean {
    return input === undefined || input.length === 0;
}

function _componentLevelsValid(component: ComponentInterface): boolean {
    return component.levels !== undefined &&
        component.levels.every(level => !_isBlankOrEmpty(level.description));
}

function _rubricComponentsValid(rubric: RubricInterface): boolean {
    return rubric.components !== undefined &&
        rubric.components.length > 0 &&
        rubric.components.every(comp => {
            return _isBlankOrEmpty(comp.name) && _componentLevelsValid(comp);
        });
}

function _rubricValid(rubric: RubricInterface | undefined): boolean {
    return rubric !== undefined && !_isBlankOrEmpty(rubric.name) && _rubricComponentsValid(rubric);
}

@Component({
    selector: 'rc-create-rubric',
    styleUrls: ['./create-rubric.component.css'],
    templateUrl: './create-rubric.component.html',
})
export class CreateRubricComponent extends BaseRubricComponent implements OnInit {

    constructor(protected store: Store<RubricsStateInterface>) {
        super(store);
    }

    public ngOnInit(): void {
        this.store.dispatch(new GetRubric());
        super.ngOnInit();
    }

    public isValid(): boolean {
        return _rubricValid(this.rubric);
    }

    public saveRubric(): void {
        if (this.rubric !== undefined) {
            this.store.dispatch(new CreateRubric(this.rubric));
        }
    }

}
