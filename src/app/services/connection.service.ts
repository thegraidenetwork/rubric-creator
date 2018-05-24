import { Injectable } from '@angular/core';
import { RubricsStateInterface } from '../store/rubrics.state';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { merge } from 'rxjs/observable/merge';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { ConnectionLost, ConnectionMade } from '../store/rubrics.actions';

@Injectable()
export class ConnectionService {
    constructor(
        private store: Store<RubricsStateInterface>,
        private navigator: Navigator,
        private window: Window
    ) {}

    public init(): void {
        // Creates a stream of true/false values depending on the connection status
        merge(
            of(this.navigator.onLine),
            fromEvent(this.window, 'online').map(() => true),
            fromEvent(this.window, 'offline').map(() => false)
        ).subscribe(connected => connected ?
            this.store.dispatch(new ConnectionMade()) :
            this.store.dispatch(new ConnectionLost())
        );
    }
}
