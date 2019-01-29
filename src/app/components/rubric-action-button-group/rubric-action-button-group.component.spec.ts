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

    it('should render 2 buttons when its parent is list-item', () => {
        component.floatRight = true;

        const buttons = fixture.nativeElement.querySelectorAll('button');

        void expect(buttons.length).toEqual(2);
    });

    it('should render 3 buttons when its parent is rubric-header', () => {
        component.showPrint = true;
        fixture.detectChanges();

        const buttons = fixture.nativeElement.querySelectorAll('button');

        void expect(buttons.length).toEqual(3);
    });

    it('should set copied to true when copyLink is called', () => {
        component.copyLink();

        void expect(component.copied).toEqual(true);
    });

    it('should call window.print when printRubric is called', () => {
        spyOn(window, 'print');

        component.printRubric();

        void expect(window.print).toHaveBeenCalled();
    });

    it('should call openDeleteRubricModal when Delete Rubric button clicked', () => {
        component.rubric.private = true;
        fixture.detectChanges();
        spyOn(component, 'openDeleteRubricModal');
        const button = fixture.debugElement.nativeElement.querySelector('#btn-delete');

        button.click();

        void expect(component.openDeleteRubricModal).toHaveBeenCalled();
    });
});
