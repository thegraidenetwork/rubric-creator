import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        const successfulCompileCallback = (): void => {
            fixture = TestBed.createComponent(AppComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        };

        const failedCompileCallback = (): void => {
            throw new Error('AppComponent could not be compiled.');
        };

        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
            ],
            imports: [
                RouterTestingModule,
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ]
        }).compileComponents().then(
            successfulCompileCallback,
            failedCompileCallback
        );
    }));

    it('should create app', () => {
        expect(component).toBeTruthy();
    });
});
