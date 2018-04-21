import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async(() => {
        const successfulCompileCallback = (): void => {
            fixture = TestBed.createComponent(NavbarComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        };

        const failedCompileCallback = (): void => {
            throw new Error('NavbarComponent could not be compiled.');
        };

        TestBed.configureTestingModule({
            declarations: [
                NavbarComponent,
            ],
            imports: [
                RouterTestingModule,
                NgbModule,
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
        }).compileComponents().then(
            successfulCompileCallback,
            failedCompileCallback
        );
    }));

    it('should show site title in navbar', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a.navbar-brand').textContent).toContain('Rubric Creator');
    });
});
