import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RubricActionButtonGroupComponent } from './rubric-action-button-group.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import * as faker from 'faker';
import { DatePipe } from '@angular/common';

describe('RubricActionButtonGroupComponent', () => {
    let component: RubricActionButtonGroupComponent;
    let fixture: ComponentFixture<RubricActionButtonGroupComponent>;
    let pipe: DatePipe;

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
            created_at: faker.date.past().toISOString(),
            description: faker.lorem.words(),
            name: faker.lorem.words(),
            private: faker.random.boolean(),
            uuid: faker.random.uuid(),
        };

        fixture.detectChanges();
    });

    it('should render 2 buttons when rubric is public and floatRight is true', () => {
        component.floatRight = true;
        component.rubric.private = false;
        fixture.detectChanges();
        const copyLinkButton = fixture.nativeElement.querySelector('#copy-link');
        const duplicateRubricButton = fixture.nativeElement.querySelector('#duplicate-rubric');

        void expect(copyLinkButton).toBeTruthy();
        void expect(duplicateRubricButton).toBeTruthy();
    });

    it('should render 3 buttons when rubric is private and floatRight is true', () => {
        component.floatRight = true;
        component.rubric.private = true;
        fixture.detectChanges();
        const copyLinkButton = fixture.nativeElement.querySelector('#copy-link');
        const duplicateRubricButton = fixture.nativeElement.querySelector('#duplicate-rubric');
        const deleteRubricButton = fixture.nativeElement.querySelector('#delete-rubric');

        void expect(copyLinkButton).toBeTruthy();
        void expect(duplicateRubricButton).toBeTruthy();
        void expect(deleteRubricButton).toBeTruthy();
    });

    it('should render 3 buttons when rubric is public and showPrint is true', () => {
        component.showPrint = true;
        component.rubric.private = false;
        fixture.detectChanges();
        const copyLinkButton = fixture.nativeElement.querySelector('#copy-link');
        const duplicateRubricButton = fixture.nativeElement.querySelector('#duplicate-rubric');
        const printRubricButton = fixture.nativeElement.querySelector('#print-rubric');

        void expect(copyLinkButton).toBeTruthy();
        void expect(duplicateRubricButton).toBeTruthy();
        void expect(printRubricButton).toBeTruthy();
    });

    it('should render 4 buttons when rubric is private and showPrint is true', () => {
        component.showPrint = true;
        component.rubric.private = true;
        fixture.detectChanges();
        const copyLinkButton = fixture.nativeElement.querySelector('#copy-link');
        const duplicateRubricButton = fixture.nativeElement.querySelector('#duplicate-rubric');
        const printRubricButton = fixture.nativeElement.querySelector('#print-rubric');
        const deleteRubricButton = fixture.nativeElement.querySelector('#delete-rubric');

        void expect(copyLinkButton).toBeTruthy();
        void expect(duplicateRubricButton).toBeTruthy();
        void expect(printRubricButton).toBeTruthy();
        void expect(deleteRubricButton).toBeTruthy();
    });

    it('should render 1 span with date rubric was created', () => {
        pipe = new DatePipe('en');
        const span = fixture.nativeElement.querySelector('#date-created');

        void expect(span.textContent).toBe(pipe.transform(component.rubric.created_at, ' MMM d, y '));
    });

    it('should render 1 span with Public ngbTooltip when rubric is public', () => {
        component.rubric.private = false;
        fixture.detectChanges();
        const span = fixture.nativeElement.querySelector('#rubric-public');
        const ngbTooltip = span.getAttribute('ng-reflect-ngb-tooltip');

        void expect(ngbTooltip).toEqual('Public');
    });

    it('should render 1 span with Private ngbTooltip when rubric is private', () => {
        component.rubric.private = true;
        fixture.detectChanges();
        const span = fixture.nativeElement.querySelector('#rubric-private');
        const ngbTooltip = span.getAttribute('ng-reflect-ngb-tooltip');

        void expect(ngbTooltip).toEqual('Private');
    });

    it('should set copied to true when copyLink is called', () => {
        spyOn(document, 'execCommand');

        component.copyLink();

        void expect(document.execCommand).toHaveBeenCalledWith('copy');
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
        const button = fixture.debugElement.nativeElement.querySelector('#delete-rubric');

        button.click();

        void expect(component.openDeleteRubricModal).toHaveBeenCalled();
    });
});
