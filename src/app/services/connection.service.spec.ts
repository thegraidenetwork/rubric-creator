import { fakeAsync, inject, TestBed } from '@angular/core/testing';
import { ConnectionService } from './connection.service';
import { Store, StoreModule } from '@ngrx/store';
import { getInitialState, RubricsStateInterface } from '../store/rubrics.state';
import { rubricsReducer } from '../store/rubrics.reducer';
import { WindowRef } from './window-ref.service';
import { NavigatorRef } from './navigator-ref.service';

describe('ConnectionService', () => {
    let testNavigator = { nativeNavigator: { onLine: true } };
    let store: Store<RubricsStateInterface>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ConnectionService,
                WindowRef,
                {
                    provide: NavigatorRef,
                    useValue: testNavigator,
                },
            ],
            imports: [
                StoreModule.forRoot(
                    { rubrics: rubricsReducer },
                    { initialState: getInitialState }
                ),
            ],
        });

        store = TestBed.get(Store);
        testNavigator = TestBed.get(NavigatorRef);
    });

    it('should toggle as navigator.onLine changes', fakeAsync(inject([ConnectionService], (service: ConnectionService) => {
        spyOn(store, 'dispatch').and.callThrough();

        service.init();

        testNavigator.nativeNavigator.onLine = false;
        service.init();

        void expect(store.dispatch).toHaveBeenCalledTimes(2);
    })));
});
