/* tslint:disable:max-classes-per-file */
import { Action } from '@ngrx/store';
import { RubricInterface } from '../object-interfaces/rubric.interface';
import { DisplayableErrorInterface } from '../object-interfaces/displayable-error.interface';

export enum RubricsActionTypes {
    GetRubric = 'Get Rubric',
    GetRubricSuccess = 'Get Rubric Success',
    GetRubricError = 'Get Rubric Error',
    GetRubrics = 'Get Rubrics',
    GetRubricsSuccess = 'Get Rubrics Success',
    GetRubricsError = 'Get Rubrics Error',
    DeleteRubric = 'Delete Rubric',
    DeleteRubricSuccess = 'Delete Rubric Success',
    DeleteRubricError = 'Delete Rubric Error',
    UpdateCurrentRubric = 'Update Current Rubric',
    CreateRubric = 'Create Rubric',
    CreateRubricSuccess = 'Create Rubric Success',
    CreateRubricError = 'Create Rubric Error',
    SetPageTitle = 'Set Page Title',
    ConnectionMade = 'Connection Made',
    ConnectionLost = 'Connection Lost',
    UpdateListFilter = 'Update List Filter',
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

export class DeleteRubric implements Action {
    public readonly type = RubricsActionTypes.DeleteRubric;
    constructor(public payload?: string) {}
}

export class DeleteRubricSuccess implements Action {
    public readonly type = RubricsActionTypes.DeleteRubricSuccess;
    constructor(public payload: Array<RubricInterface>) {}
}

export class DeleteRubricError implements Action {
    public readonly type = RubricsActionTypes.DeleteRubricError;
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

export class SetPageTitle implements Action {
    public readonly type = RubricsActionTypes.SetPageTitle;
    constructor(public payload: string) {}
}

export class ConnectionMade implements Action {
    public readonly type = RubricsActionTypes.ConnectionMade;
    constructor(public payload?: undefined) {}
}

export class ConnectionLost implements Action {
    public readonly type = RubricsActionTypes.ConnectionLost;
    constructor(public payload?: undefined) {}
}

export class UpdateListFilter implements Action {
  public readonly type = RubricsActionTypes.UpdateListFilter;
  constructor(public payload: string) {}
}

export type RubricsActionsUnion =
    | GetRubric
    | GetRubricSuccess
    | GetRubricError
    | GetRubrics
    | GetRubricsSuccess
    | GetRubricsError
    | DeleteRubric
    | DeleteRubricSuccess
    | DeleteRubricError
    | UpdateCurrentRubric
    | CreateRubric
    | CreateRubricSuccess
    | CreateRubricError
    | SetPageTitle
    | ConnectionMade
    | ConnectionLost
    | UpdateListFilter;
