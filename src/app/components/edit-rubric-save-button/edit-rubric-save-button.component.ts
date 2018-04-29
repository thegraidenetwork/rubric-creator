import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RubricsStateInterface } from '../../store/rubrics.state';
import { CreateRubric } from '../../store/rubrics.actions';
import { ComponentInterface } from '../../object-interfaces/component.interface';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { BaseEditRubricComponent } from '../base/base-edit-rubric.component';

function _isBlankOrEmpty(input: string | undefined): boolean {
    return input === undefined || input.length === 0;
}

function _componentLevelsValid(component: ComponentInterface): boolean {
    return component.levels.length > 0 &&
        component.levels.every(level => level.score !== undefined);
}

function _rubricComponentsValid(rubric: RubricInterface): boolean {
    return rubric.components !== undefined &&
        rubric.components.length > 0 &&
        rubric.components.every(comp => {
            return !_isBlankOrEmpty(comp.name) && _componentLevelsValid(comp);
        });
}

function _rubricValid(rubric: RubricInterface | undefined): boolean {
    return rubric !== undefined && !_isBlankOrEmpty(rubric.name) && _rubricComponentsValid(rubric);
}

@Component({
    selector: 'rc-edit-rubric-save-button',
    styleUrls: ['./edit-rubric-save-button.component.css'],
    templateUrl: './edit-rubric-save-button.component.html',
})
export class EditRubricSaveButtonComponent extends BaseEditRubricComponent implements OnInit {
    constructor(
        protected store: Store<RubricsStateInterface>
    ) {
        super(store);
    }

    public get saveButtonText(): string {
        return this.saving ? 'Saving' : 'Save';
    }

    public isValid(): boolean {
        return _rubricValid(this.rubric) && !this.saving;
    }

    public saveRubric(): void {
        if (this.rubric !== undefined) {
            this.store.dispatch(new CreateRubric(this.rubric));
        }
    }
}
