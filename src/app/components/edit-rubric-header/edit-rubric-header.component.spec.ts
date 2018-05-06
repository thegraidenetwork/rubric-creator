import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRubricHeaderComponent } from './edit-rubric-header.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import * as faker from 'faker';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { GetRubricSuccess } from '../../store/rubrics.actions';

describe('EditRubricHeaderComponent', () => {
    let component: EditRubricHeaderComponent;
    let fixture: ComponentFixture<EditRubricHeaderComponent>;
    let store: Store<RubricsStateInterface>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [EditRubricHeaderComponent],
            imports: [
                FormsModule,
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
        fixture = TestBed.createComponent(EditRubricHeaderComponent);
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

    it('should update rubric via store when called', () => {
        spyOn(store, 'dispatch').and.callThrough();

        component.updateRubric();

        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
