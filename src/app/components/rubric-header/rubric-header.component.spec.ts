import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RubricHeaderComponent } from './rubric-header.component';
import { Store, StoreModule } from '@ngrx/store';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as faker from 'faker';
import { GetRubricSuccess } from '../../store/rubrics.actions';
import { RubricInterface } from '../../object-interfaces/rubric.interface';

describe('PageAlertComponent', () => {
    let component: RubricHeaderComponent;
    let fixture: ComponentFixture<RubricHeaderComponent>;
    let store: Store<RubricsStateInterface>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [
                RubricHeaderComponent,
                Nl2brPipe,
            ],
            imports: [
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
        fixture = TestBed.createComponent(RubricHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show rubric name and description when loaded', () => {
        const rubric: RubricInterface = {
            description: faker.lorem.words(),
            name: faker.lorem.words(),
            uuid: faker.random.uuid(),
        };
        const action = new GetRubricSuccess(rubric);

        store.dispatch(action);

        fixture.detectChanges();

        const nameResult = fixture.nativeElement.querySelectorAll('h1')[0].textContent;
        const descriptionResult = fixture.nativeElement.querySelectorAll('p')[0].textContent;
        expect(nameResult).toBe(rubric.name);
        expect(descriptionResult).toBe(rubric.description);
    });
});
