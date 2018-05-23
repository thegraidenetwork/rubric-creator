import { Injectable } from '@angular/core';
import { RubricsStateInterface } from '../store/rubrics.state';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { merge } from 'rxjs/observable/merge';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { ConnectionLost, ConnectionMade } from '../store/rubrics.actions';

@Injectable()
export class ConnectionService {
    constructor(private store: Store<RubricsStateInterface>) {}

    public init(): void {
        merge(
            of(navigator.onLine),
            fromEvent(window, 'online').map(() => true),
            fromEvent(window, 'offline').map(() => false)
        ).subscribe(connected => connected ?
            this.store.dispatch(new ConnectionMade()) :
            this.store.dispatch(new ConnectionLost())
        );
    }
}
