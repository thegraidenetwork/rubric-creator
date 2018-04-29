/* tslint:disable:max-classes-per-file */
import { Action } from '@ngrx/store';
import { RubricInterface } from '../object-interfaces/rubric.interface';
import { DisplayableErrorInterface } from '../object-interfaces/displayable-error.interface';
import { BreadcrumbInterface } from '../object-interfaces/breadcrumb.interface';

export enum RubricsActionTypes {
    GetRubric = 'Get Rubric',
    GetRubricSuccess = 'Get Rubric Success',
    GetRubricError = 'Get Rubric Error',
    GetRubrics = 'Get Rubrics',
    GetRubricsSuccess = 'Get Rubrics Success',
    GetRubricsError = 'Get Rubrics Error',
    UpdateCurrentRubric = 'Update Current Rubric',
    CreateRubric = 'Create Rubric',
    CreateRubricSuccess = 'Create Rubric Success',
    CreateRubricError = 'Create Rubric Error',
    SetBreadcrumbs = 'Set Breadcrumbs',
}

export class GetRubric implements Action {
    public readonly type = RubricsActionTypes.GetRubric;
    constructor(public payload?: string) {}
}

export class GetRubricSuccess implements Action {
    public readonly type = RubricsActionTypes.GetRubricSuccess;
    constructor(public payload: RubricInterface) {}
}

export class GetRubricError implements Action {
    public readonly type = RubricsActionTypes.GetRubricError;
    constructor(public payload: DisplayableErrorInterface) {}
}

export class GetRubrics implements Action {
    public readonly type = RubricsActionTypes.GetRubrics;
    constructor(public payload?: undefined) {}
}

export class GetRubricsSuccess implements Action {
    public readonly type = RubricsActionTypes.GetRubricsSuccess;
    constructor(public payload: Array<RubricInterface>) {}
}

export class GetRubricsError implements Action {
    public readonly type = RubricsActionTypes.GetRubricsError;
    constructor(public payload: DisplayableErrorInterface) {}
}

export class UpdateCurrentRubric implements Action {
    public readonly type = RubricsActionTypes.UpdateCurrentRubric;
    constructor(public payload: RubricInterface) {}
}

export class CreateRubric implements Action {
    public readonly type = RubricsActionTypes.CreateRubric;
    constructor(public payload: RubricInterface) {}
}

export class CreateRubricSuccess implements Action {
    public readonly type = RubricsActionTypes.CreateRubricSuccess;
    constructor(public payload: RubricInterface) {}
}

export class CreateRubricError implements Action {
    public readonly type = RubricsActionTypes.CreateRubricError;
    constructor(public payload: DisplayableErrorInterface) {}
}

export class SetBreadcrumbs implements Action {
    public readonly type = RubricsActionTypes.SetBreadcrumbs;
    constructor(public payload: Array<BreadcrumbInterface> | undefined) {}
}

export type RubricsActionsUnion =
    | GetRubric
    | GetRubricSuccess
    | GetRubricError
    | GetRubrics
    | GetRubricsSuccess
    | GetRubricsError
    | UpdateCurrentRubric
    | CreateRubric
    | CreateRubricSuccess
    | CreateRubricError
    | SetBreadcrumbs;
