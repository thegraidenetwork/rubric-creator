import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRubricSaveButtonComponent } from './edit-rubric-save-button.component';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as faker from 'faker';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { GetRubricSuccess } from '../../store/rubrics.actions';

describe('EditRubricSaveButtonComponent', () => {
    let component: EditRubricSaveButtonComponent;
    let fixture: ComponentFixture<EditRubricSaveButtonComponent>;
    let store: Store<RubricsStateInterface>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [EditRubricSaveButtonComponent],
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
        fixture = TestBed.createComponent(EditRubricSaveButtonComponent);
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

    it('should get save button text when saving', () => {
        component.saving = false;

        expect(component.saveButtonText).toBe('Save');
    });

    it('should get save button text when not saving', () => {
        component.saving = true;

        expect(component.saveButtonText).toBe('Saving');
    });

    it('should return false when rubric is invalid', () => {
        component.rubric = {
            name: faker.lorem.words(),
        };

        expect(component.isValid()).toBe(false);
    });

    it('should return true when rubric is valid', () => {
        component.rubric = {
            components: [
                {
                    levels: [
                        {score: faker.random.number()},
                        {score: faker.random.number()},
                    ],
                    name: faker.lorem.words(),
                },
            ],
            name: faker.lorem.words(),
        };

        expect(component.isValid()).toBe(true);
    });

    it('should create rubric via store when called', () => {
        spyOn(store, 'dispatch').and.callThrough();

        component.saveRubric();

        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
