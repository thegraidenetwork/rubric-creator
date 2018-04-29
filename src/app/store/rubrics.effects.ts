import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CreateRubric, CreateRubricSuccess, GetRubric, GetRubrics, RubricsActionTypes } from './rubrics.actions';
import { Action } from '@ngrx/store';
import { DisplayableErrorInterface } from '../object-interfaces/displayable-error.interface';
import { BackendDataService } from '../data-services/backend-data.service';
import { RubricInterface } from '../object-interfaces/rubric.interface';
import { Router } from '@angular/router';

function _generateDisplayableError(error?: object): DisplayableErrorInterface {
    return {message: 'Whoops! Something went wrong and data could not be loaded. Try refreshing the page.'};
}

function _getEmptyRubric(): RubricInterface {
    return {
        components: [
            {
                name: '',
                levels: [
                    {
                        score: 4,
                        description: '',
                    },
                    {
                        score: 3,
                        description: '',
                    },
                    {
                        score: 2,
                        description: '',
                    },
                    {
                        score: 1,
                        description: '',
                    },
                ],
            },
            {
                name: '',
                levels: [
                    {
                        score: 4,
                        description: '',
                    },
                    {
                        score: 3,
                        description: '',
                    },
                    {
                        score: 2,
                        description: '',
                    },
                    {
                        score: 1,
                        description: '',
                    },
                ],
            },
        ],
        created_at: new Date().toISOString(),
        description: '',
        name: '',
        private: true,
    };
}

@Injectable()
export class RubricsEffects {
    @Effect()
    public getRubric: Observable<Action> = this.actions
        .ofType<GetRubric>(RubricsActionTypes.GetRubric)
        .mergeMap(action => {
            if (action.payload !== undefined) {
                // Get rubric by uuid
                return this.backendData.getRubric(action.payload)
                    .map(data => ({
                        type: RubricsActionTypes.GetRubricSuccess,
                        payload: data,
                    }))
                    .catch(err => of({
                        type: RubricsActionTypes.GetRubricError,
                        payload: _generateDisplayableError(err),
                    }));
            } else {
                // Or generate an empty rubric
                return of({
                    type: RubricsActionTypes.GetRubricSuccess,
                    payload: _getEmptyRubric(),
                });
            }
        });

    @Effect()
    public getRubrics: Observable<Action> = this.actions
        .ofType<GetRubrics>(RubricsActionTypes.GetRubrics)
        .mergeMap(action => {
            return this.backendData.getRubrics()
                .map(data => ({
                    type: RubricsActionTypes.GetRubricsSuccess,
                    payload: data,
                }))
                .catch(err => of({
                    type: RubricsActionTypes.GetRubricsError,
                    payload: _generateDisplayableError(err),
                }));
        });

    @Effect()
    public createRubric: Observable<Action> = this.actions
        .ofType<CreateRubric>(RubricsActionTypes.CreateRubric)
        .mergeMap(action => {
            return this.backendData.createRubric(action.payload)
                .map(data => ({
                    type: RubricsActionTypes.CreateRubricSuccess,
                    payload: data,
                }))
                .catch(err => of({
                    type: RubricsActionTypes.CreateRubricError,
                    payload: _generateDisplayableError(err),
                }));
        });

    @Effect({dispatch: false})
    public createRubricSuccess: Observable<Action> = this.actions
        .ofType<CreateRubricSuccess>(RubricsActionTypes.CreateRubricSuccess)
        .do(action => this.router.navigateByUrl(`/rubrics/${action.payload.uuid}`));

    constructor(
        private backendData: BackendDataService,
        private actions: Actions,
        private router: Router
    ) {}
}
