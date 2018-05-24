import { async, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { ConnectionService } from './connection.service';
import { Store, StoreModule } from '@ngrx/store';
import { getInitialState, RubricsStateInterface } from '../store/rubrics.state';
import { rubricsReducer } from '../store/rubrics.reducer';

describe('ConnectionService', () => {
    let testNavigator = {onLine: true};
    let store: Store<RubricsStateInterface>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ConnectionService,
                {
                    provide: Window,
                    useValue: window,
                },
                {
                    provide: Navigator,
                    useValue: testNavigator,
                },
            ],
            imports: [
                StoreModule.forRoot(
                    {rubrics: rubricsReducer},
                    {initialState: getInitialState}
                ),
            ],
        });

        store = TestBed.get(Store);
        testNavigator = TestBed.get(Navigator);
    });

    it('should toggle as navigator.onLine changes', fakeAsync(inject([ConnectionService], (service: ConnectionService) => {
        spyOn(store, 'dispatch').and.callThrough();

        service.init();

        testNavigator.onLine = false;
        service.init();

        expect(store.dispatch).toHaveBeenCalledTimes(2);
    })));
});
