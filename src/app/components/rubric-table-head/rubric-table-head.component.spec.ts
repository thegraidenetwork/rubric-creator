import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RubricTableHeadComponent } from './rubric-table-head.component';
import { Store, StoreModule } from '@ngrx/store';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import * as faker from 'faker';
import { GetRubricSuccess } from '../../store/rubrics.actions';
import { ComponentInterface } from '../../object-interfaces/component.interface';
import { RubricInterface } from '../../object-interfaces/rubric.interface';

describe('RubricTableHeadComponent', () => {
    let component: RubricTableHeadComponent;
    let fixture: ComponentFixture<RubricTableHeadComponent>;
    let store: Store<RubricsStateInterface>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [RubricTableHeadComponent],
            imports: [
                StoreModule.forRoot(
                    {rubrics: rubricsReducer},
                    {initialState: getInitialState}
                ),
            ],
        }).compileComponents();

        store = TestBed.get(Store);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RubricTableHeadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show component and level headers', () => {
        const components: Array<ComponentInterface> = [
            {
                description: faker.lorem.words(),
                levels: [
                    {
                        description: faker.lorem.words(),
                        score: faker.random.number(),
                    },
                ],
                name: faker.lorem.words(),
            },
        ];
        const rubric: RubricInterface = {
            components,
            description: faker.lorem.words(),
            name: faker.lorem.words(),
            uuid: faker.random.uuid(),
        };
        const action = new GetRubricSuccess(rubric);

        store.dispatch(action);

        fixture.detectChanges();

        const componentNameResult = fixture.nativeElement.querySelectorAll('th')[0].textContent;
        const levelNameResult = fixture.nativeElement.querySelectorAll('th')[1].textContent;
        expect(componentNameResult).toContain('Components');
        expect(levelNameResult).toContain('Levels');
    });
});
