import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbComponent } from './breadcrumb.component';
import { Store, StoreModule } from '@ngrx/store';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { SetBreadcrumbs } from '../../store/rubrics.actions';
import * as faker from 'faker';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('BreadcrumbComponent', () => {
    let component: BreadcrumbComponent;
    let fixture: ComponentFixture<BreadcrumbComponent>;
    let store: Store<RubricsStateInterface>;
    let router: Router;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(
                    {rubrics: rubricsReducer},
                    { initialState: getInitialState }
                ),
                RouterTestingModule,
            ],
            declarations: [BreadcrumbComponent],
        }).compileComponents();

        store = TestBed.get(Store);
        router = TestBed.get(Router);

        spyOn(store, 'dispatch').and.callThrough();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BreadcrumbComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should set breadcrumbs when set in store', () => {
        const breadcrumbs = [{
            path: faker.lorem.word(),
            text: faker.lorem.word(),
            selected: faker.random.boolean(),
        }];
        const action = new SetBreadcrumbs(breadcrumbs);

        store.dispatch(action);

        expect(component.breadcrumbs).toEqual(breadcrumbs);
    });

    it('should clear breadcrumbs when route changes', () => {
        const action = new SetBreadcrumbs(undefined);

        router.navigateByUrl('/');

        expect(store.dispatch).toHaveBeenCalledWith(action);
    });
});
