import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('PageNotFoundComponent', () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AboutComponent]
        }).compileComponents();
    }));

    it('should show page not found message', () => {
        // Arrange & Act
        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        // Assert
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toBe('Page not found');
    });
});
