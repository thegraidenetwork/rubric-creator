import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageAlertComponent } from './page-alert.component';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { RouterTestingModule } from '@angular/router/testing';
import * as faker from 'faker';
import { GetRubricError } from '../../store/rubrics.actions';

describe('PageAlertComponent', () => {
    let component: PageAlertComponent;
    let fixture: ComponentFixture<PageAlertComponent>;
    let store: Store<RubricsStateInterface>;
    let router: Router;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [PageAlertComponent],
            imports: [
                StoreModule.forRoot(
                    { rubrics: rubricsReducer },
                    { initialState: getInitialState }
                ),
                RouterTestingModule,
            ],
        }).compileComponents();

        store = TestBed.get(Store);
        router = TestBed.get(Router);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageAlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should set error when set in store', () => {
        const error = {
            message: faker.lorem.words(),
        };
        const action = new GetRubricError(error);

        store.dispatch(action);

        void expect(component.alertMessage).toEqual(error.message);
        void expect(component.alertClass).toEqual('alert-danger');
    });

    it('should clear error when route changed', () => {
        const error = {
            message: faker.lorem.words(),
        };
        const action = new GetRubricError(error);

        store.dispatch(action);

        void router.navigateByUrl('/');

        void expect(component.alertMessage).toBeUndefined();
        void expect(component.alertClass).toBeUndefined();
    });
});
