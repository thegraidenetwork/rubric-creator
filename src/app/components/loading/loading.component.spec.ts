import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
    let component: LoadingComponent;
    let fixture: ComponentFixture<LoadingComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [LoadingComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        const loading = fixture.nativeElement.querySelector('.angular-placeholder');

        expect(component).toBeTruthy();
        expect(loading.textContent).toContain('Loading...');
    });
});
