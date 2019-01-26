import { Injectable } from '@angular/core';
import { DisplayableErrorInterface } from '../object-interfaces/displayable-error.interface';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {
    CreateRubric,
    CreateRubricSuccess,
    DeleteRubric,
    DeleteRubricSuccess,
    GetRubric,
    GetRubrics,
    RubricsActionTypes,
    SetPageTitle,
} from './rubrics.actions';
import { Action } from '@ngrx/store';
import { ActionWithPayload } from '../object-interfaces/action.interface';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { BackendDataService } from '../data-services/backend-data.service';
import { Router } from '@angular/router';
import { emptyRubricObject } from '../data-services/data/empty-rubric.object';
import { ConnectionService } from '../services/connection.service';
import { Title } from '@angular/platform-browser';
import { RubricInterface } from '../object-interfaces/rubric.interface';

function _generateDisplayableError(error?: object): DisplayableErrorInterface {
    return { message: 'Whoops! Something went wrong and data could not be loaded. Try refreshing the page.' };
}

@Injectable()
export class RubricsEffects {
    @Effect()
    public getRubric: Observable<Action> = this.actions
        .pipe(
            ofType<GetRubric>(RubricsActionTypes.GetRubric),
            mergeMap(action => {
                if (action.payload !== undefined) {
                    // Get rubric by uuid
                    return this.backendData.getRubric(action.payload).pipe(
                        map(data => ({
                            payload: data,
                            type: RubricsActionTypes.GetRubricSuccess,
                        })),
                        catchError(err => of({
                            payload: _generateDisplayableError(err),
                            type: RubricsActionTypes.GetRubricError,
                        })));
                } else {
                    // Or generate an empty rubric
                    return of({
                        payload: emptyRubricObject,
                        type: RubricsActionTypes.GetRubricSuccess,
                    });
                }
            }));

    @Effect()
    public getRubrics: Observable<Action> = this.actions
        .pipe(
            ofType<GetRubrics>(RubricsActionTypes.GetRubrics),
            mergeMap(action => {
                return this.backendData.getRubrics().pipe(
                    map(data => ({
                        payload: data,
                        type: RubricsActionTypes.GetRubricsSuccess,
                    })),
                    catchError(err => of({
                        payload: _generateDisplayableError(err),
                        type: RubricsActionTypes.GetRubricsError,
                    })));
            }));

    @Effect()
    public createRubric: Observable<Action> = this.actions
        .pipe(
            ofType<CreateRubric>(RubricsActionTypes.CreateRubric),
            mergeMap(action => {
                return this.backendData.createRubric(action.payload).pipe(
                    map(data => ({
                        payload: data,
                        type: RubricsActionTypes.CreateRubricSuccess,
                    })),
                    catchError(err => of({
                        payload: _generateDisplayableError(err),
                        type: RubricsActionTypes.CreateRubricError,
                    })));
            }));

    @Effect({ dispatch: false })
    public createRubricSuccess: Observable<ActionWithPayload<RubricInterface>> = this.actions
        .pipe(
            ofType<CreateRubricSuccess>(RubricsActionTypes.CreateRubricSuccess),
            tap(action => void this.router.navigateByUrl(`/rubrics/${action.payload.uuid}`))
        );

    @Effect()
    public deleteRubric: Observable<Action> = this.actions
        .pipe(
            ofType<DeleteRubric>(RubricsActionTypes.DeleteRubric),
            mergeMap(action => {
                return this.backendData.deleteRubric(action.payload).pipe(
                    map(data => ({
                        payload: data,
                        type: RubricsActionTypes.DeleteRubricSuccess,
                    })),
                    catchError(err => of({
                        payload: _generateDisplayableError(err),
                        type: RubricsActionTypes.DeleteRubricError,
                    })));
            }));

    @Effect({ dispatch: false })
    public deleteRubricSuccess: Observable<Action> = this.actions
        .pipe(
            ofType<DeleteRubricSuccess>(RubricsActionTypes.DeleteRubricSuccess),
            tap(() => void this.router.navigateByUrl('/rubrics')));

    @Effect({ dispatch: false })
    public setPageTitle: Observable<ActionWithPayload<string>> = this.actions
        .pipe(
            ofType<SetPageTitle>(RubricsActionTypes.SetPageTitle),
            tap(action => this.titleService.setTitle(action.payload))
        );

    constructor(
        private backendData: BackendDataService,
        private actions: Actions,
        private router: Router,
        private connection: ConnectionService,
        private titleService: Title
    ) {
        this.connection.init();
    }
}
