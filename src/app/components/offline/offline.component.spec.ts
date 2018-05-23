import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OfflineComponent } from './offline.component';

describe('OfflineComponent', () => {
    let component: OfflineComponent;
    let fixture: ComponentFixture<OfflineComponent>;

    beforeEach(async(() => {
        const successfulCompileCallback = (): void => {
            fixture = TestBed.createComponent(OfflineComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        };

        const failedCompileCallback = (): void => {
            throw new Error('OfflineComponent could not be compiled.');
        };

        TestBed.configureTestingModule({
            declarations: [OfflineComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents().then(
            successfulCompileCallback,
            failedCompileCallback
        );
    }));

    xit('should show page title in header tag', () => {
        expect(component).toBeTruthy();
    });
});
