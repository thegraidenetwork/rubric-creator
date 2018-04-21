import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('AboutComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        const successfulCompileCallback = (): void => {
            fixture = TestBed.createComponent(HomeComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        };

        const failedCompileCallback = (): void => {
            throw new Error('NavbarComponent could not be compiled.');
        };

        TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
            ],
            imports: [
                RouterTestingModule,
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
        }).compileComponents().then(
            successfulCompileCallback,
            failedCompileCallback
        );
    }));

    it('should show page title in header tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1.display-4').textContent).toBe('Rubric Creator');
    });
});
