import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeJumbotronComponent } from './home-jumbotron.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeJumbotronComponent', () => {
    let component: HomeJumbotronComponent;
    let fixture: ComponentFixture<HomeJumbotronComponent>;

    beforeEach(async(() => {
        const successfulCompileCallback = (): void => {
            fixture = TestBed.createComponent(HomeJumbotronComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        };

        const failedCompileCallback = (): void => {
            throw new Error('HomeJumbotronComponent could not be compiled.');
        };

        TestBed.configureTestingModule({
            declarations: [HomeJumbotronComponent],
            imports: [RouterTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
