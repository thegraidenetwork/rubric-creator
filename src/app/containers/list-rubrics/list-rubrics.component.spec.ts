import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRubricsComponent } from './list-rubrics.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { Store, StoreModule } from '@ngrx/store';
import * as faker from 'faker';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { GetRubricSuccess } from '../../store/rubrics.actions';

describe('ListRubricsComponent', () => {
    let component: ListRubricsComponent;
    let fixture: ComponentFixture<ListRubricsComponent>;
    let store: Store<RubricsStateInterface>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [ListRubricsComponent],
            imports: [
                RouterTestingModule,
                StoreModule.forRoot(
                    {rubrics: rubricsReducer},
                    {initialState: getInitialState}
                ),
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();

        store = TestBed.get(Store);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListRubricsComponent);
        component = fixture.componentInstance;

        const rubric: RubricInterface = {
            description: faker.lorem.words(),
            name: faker.lorem.words(),
            uuid: faker.random.uuid(),
        };
        const action = new GetRubricSuccess(rubric);
        store.dispatch(action);

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
