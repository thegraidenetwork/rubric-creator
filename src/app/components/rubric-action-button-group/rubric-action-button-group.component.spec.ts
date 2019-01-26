import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RubricActionButtonGroupComponent } from './rubric-action-button-group.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import * as faker from 'faker';

describe('RubricActionButtonGroupComponent', () => {
    let component: RubricActionButtonGroupComponent;
    let fixture: ComponentFixture<RubricActionButtonGroupComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [RubricActionButtonGroupComponent],
            imports: [
                NgbModule,
                RouterTestingModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RubricActionButtonGroupComponent);
        component = fixture.componentInstance;

        component.rubric = {
            description: faker.lorem.words(),
            name: faker.lorem.words(),
            uuid: faker.random.uuid(),
        };

        fixture.detectChanges();
    });

    it('should render buttons', () => {
        const buttons = fixture.nativeElement.querySelectorAll('button');
        void expect(buttons.length).toBeGreaterThanOrEqual(2);
        void expect(buttons.length).toBeLessThanOrEqual(4);
    });
});
