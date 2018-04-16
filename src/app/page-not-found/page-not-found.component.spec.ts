import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageNotFoundComponent]
        }).compileComponents();
    }));

    it('should show page not found message', () => {
        // Arrange & Act
        fixture = TestBed.createComponent(PageNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        // Assert
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toBe('Page not found');
    });
});
