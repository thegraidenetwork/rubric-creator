import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRubricTableBodyComponent } from './edit-rubric-table-body.component';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as faker from 'faker';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { GetRubricSuccess } from '../../store/rubrics.actions';

describe('EditRubricTableBodyComponent', () => {
    let component: EditRubricTableBodyComponent;
    let fixture: ComponentFixture<EditRubricTableBodyComponent>;
    let store: Store<RubricsStateInterface>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [EditRubricTableBodyComponent],
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
        fixture = TestBed.createComponent(EditRubricTableBodyComponent);
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
