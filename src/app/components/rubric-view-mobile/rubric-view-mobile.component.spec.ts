import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RubricViewMobileComponent } from './rubric-view-mobile.component';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { Store, StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as faker from 'faker';
import { GetRubricSuccess } from '../../store/rubrics.actions';
import { ComponentInterface } from '../../object-interfaces/component.interface';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('RubricViewMobileComponent', () => {
    let component: RubricViewMobileComponent;
    let fixture: ComponentFixture<RubricViewMobileComponent>;
    let store: Store<RubricsStateInterface>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [RubricViewMobileComponent],
            imports: [
                NgbModule,
                StoreModule.forRoot(
                    { rubrics: rubricsReducer },
                    { initialState: getInitialState }
                ),
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();

        store = TestBed.get(Store);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RubricViewMobileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should show number of components in header when set', () => {
        const componentObject = {
            description: faker.lorem.words(),
            levels: [
                {
                    description: faker.lorem.words(),
                    score: faker.random.number(),
                },
            ],
            name: faker.lorem.words(),
        };
        const components: Array<ComponentInterface> = [
            componentObject,
            componentObject,
            componentObject,
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

        const componentHeader = fixture.nativeElement.querySelectorAll('h4')[0].textContent;
        void expect(componentHeader).toContain('Components (3)');
    });
});
