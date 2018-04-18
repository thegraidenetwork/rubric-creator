import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { JsonbinHttpService } from '../services/http/jsonbin-http.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class RubricsEffects {
    @Effect()
    public login$: Observable<Action> = this.actions$
        .ofType('SELECT_RUBRIC')
        .mergeMap(action => {
            return this.jsonbin.getRubric('5ad54f770f8cf5632c4a9497')
                .map(data => ({type: 'GET_RUBRIC_FOUND', payload: data}))
                .catch(() => of({type: 'GET_RUBRIC_FAILED'}));
        });

    constructor(private jsonbin: JsonbinHttpService, private actions$: Actions) {}
}
