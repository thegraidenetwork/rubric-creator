import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { JsonbinHttpService } from '../services/http/jsonbin-http.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GetRubric, RubricsActionTypes } from './rubrics.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class RubricsEffects {
    @Effect()
    public login$: Observable<Action> = this.actions$
        .ofType<GetRubric>(RubricsActionTypes.GetRubric)
        .mergeMap(action => {
            return this.jsonbin.getRubric(action.payload)
                .map(data => ({type: RubricsActionTypes.GetRubricSuccess, payload: data}))
                .catch(err => of({type: RubricsActionTypes.GetRubricError, payload: err}));
        });

    constructor(private jsonbin: JsonbinHttpService, private actions$: Actions) {}
}
