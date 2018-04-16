import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('PageNotFoundComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavbarComponent]
        }).compileComponents();
    }));

    it('should show page not found message', () => {
        // Arrange & Act
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        // Assert
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toBe('Page not found');
    });
});
