import { Injectable } from '@angular/core';
import { RubricsStateInterface } from '../store/rubrics.state';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { merge } from 'rxjs/observable/merge';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { ConnectionLost, ConnectionMade } from '../store/rubrics.actions';
import { WindowRef } from './window-ref.service';
import { NavigatorRef } from './navigator-ref.service';

@Injectable()
export class ConnectionService {
    constructor(
        private store: Store<RubricsStateInterface>,
        private navigator: NavigatorRef,
        private window: WindowRef
    ) {}

    public init(): void {
        // Creates a stream of true/false values depending on the connection status
        merge(
            of(this.navigator.nativeNavigator.onLine),
            fromEvent(this.window.nativeWindow, 'online').map(() => true),
            fromEvent(this.window.nativeWindow, 'offline').map(() => false)
        ).subscribe(connected => {
            if (connected) {
                this.store.dispatch(new ConnectionMade());
            } else {
                this.store.dispatch(new ConnectionLost());
            }
        });
    }
}
