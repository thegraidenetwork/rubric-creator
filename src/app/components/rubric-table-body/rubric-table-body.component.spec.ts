import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RubricTableBodyComponent } from './rubric-table-body.component';
import { Store, StoreModule } from '@ngrx/store';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import * as faker from 'faker';
import { GetRubricSuccess } from '../../store/rubrics.actions';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { ComponentInterface } from '../../object-interfaces/component.interface';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('RubricTableBodyComponent', () => {
    let component: RubricTableBodyComponent;
    let fixture: ComponentFixture<RubricTableBodyComponent>;
    let store: Store<RubricsStateInterface>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [
                RubricTableBodyComponent,
                Nl2brPipe,
            ],
            imports: [
                StoreModule.forRoot(
                    {rubrics: rubricsReducer},
                    {initialState: getInitialState}
                ),
                RouterTestingModule,
            ],
        }).compileComponents();

        store = TestBed.get(Store);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RubricTableBodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show component name and levels', () => {
        const components: Array<ComponentInterface> = [
            {
                description: faker.lorem.words(),
                levels: [
                    {
                        description: faker.lorem.words(),
                        score: faker.random.number(),
                    },
                    {
                        description: faker.lorem.words(),
                        score: faker.random.number(),
                    },
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

        const componentNameResult = fixture.nativeElement.querySelectorAll('th')[0];
        const levelScoreResult = fixture.nativeElement.querySelectorAll('h5');
        expect(componentNameResult.textContent).toContain(components[0].name);
        expect(levelScoreResult).toBeDefined();
        expect(levelScoreResult.length).toBe(components[0].levels.length);
    });
});
