import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RubricListItemComponent } from './rubric-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';
import * as faker from 'faker';
import { ComponentInterface } from '../../object-interfaces/component.interface';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RubricListItemComponent', () => {
    let component: RubricListItemComponent;
    let fixture: ComponentFixture<RubricListItemComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [
                RubricListItemComponent,
                Nl2brPipe,
            ],
            imports: [ RouterTestingModule ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RubricListItemComponent);
        component = fixture.componentInstance;
    });

    it('should create when rubric input', () => {
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
        component.rubric = rubric;

        fixture.detectChanges();

        expect(component).toBeTruthy();
        const rubricNameResult = fixture.nativeElement.querySelectorAll('h5')[0].textContent;
        expect(rubricNameResult).toContain(rubric.name);
    });
});
