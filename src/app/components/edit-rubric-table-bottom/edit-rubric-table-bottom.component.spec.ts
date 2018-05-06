import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRubricTableBottomComponent } from './edit-rubric-table-bottom.component';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as faker from 'faker';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { GetRubricSuccess } from '../../store/rubrics.actions';

describe('EditRubricSaveButtonComponent', () => {
    let component: EditRubricTableBottomComponent;
    let fixture: ComponentFixture<EditRubricTableBottomComponent>;
    let store: Store<RubricsStateInterface>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [EditRubricTableBottomComponent],
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
        fixture = TestBed.createComponent(EditRubricTableBottomComponent);
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

    it('should copy component and update rubric via store when component added', () => {
        if (component.rubric !== undefined) {
            const components = [
                {
                    levels: [{score: faker.random.number()}],
                    name: faker.lorem.words(),
                },
            ];
            component.rubric.components = components;
            spyOn(store, 'dispatch').and.callThrough();

            component.addComponent();

            expect(store.dispatch).toHaveBeenCalledTimes(1);
            expect(component.rubric.components[1]).toEqual(components[0]);
        }
    });
});
