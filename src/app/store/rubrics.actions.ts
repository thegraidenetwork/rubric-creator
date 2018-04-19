/* tslint:disable:max-classes-per-file */
import { Action } from '@ngrx/store';
import { RubricInterface } from '../interfaces/rubric.interface';
import { HttpErrorResponse } from '@angular/common/http';

export enum RubricsActionTypes {
    GetRubric = 'Get Rubric',
    GetRubricSuccess = 'Get Rubric Success',
    GetRubricError = 'Get Rubric Error',
}

export class GetRubric implements Action {
    public readonly type = RubricsActionTypes.GetRubric;

    constructor(public payload: string) {}
}

export class GetRubricSuccess implements Action {
    public readonly type = RubricsActionTypes.GetRubricSuccess;

    constructor(public payload: RubricInterface) {}
}

export class GetRubricError implements Action {
    public readonly type = RubricsActionTypes.GetRubricError;

    constructor(public payload: HttpErrorResponse) {}
}

export type RubricsActionsUnion =
    | GetRubric
    | GetRubricSuccess
    | GetRubricError;
