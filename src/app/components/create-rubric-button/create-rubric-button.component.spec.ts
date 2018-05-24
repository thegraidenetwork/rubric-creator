import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateRubricButtonComponent } from './create-rubric-button.component';
import { Store, StoreModule } from '@ngrx/store';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { ConnectionLost } from '../../store/rubrics.actions';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateRubricButtonComponent', () => {
    let component: CreateRubricButtonComponent;
    let fixture: ComponentFixture<CreateRubricButtonComponent>;
    let store: Store<RubricsStateInterface>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [CreateRubricButtonComponent],
            imports: [
                StoreModule.forRoot(
                    {rubrics: rubricsReducer},
                    {initialState: getInitialState}
                ),
                RouterTestingModule,
            ],
        }).compileComponents();

        store = TestBed.get(Store);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateRubricButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should show activated button when connected', () => {
        const button = fixture.nativeElement.querySelector('a.btn');
        const disabledButton = fixture.nativeElement.querySelector('a.disabled');

        expect(component.connected).toBeTruthy();
        expect(button.textContent).toContain('Create Rubric');
        expect(disabledButton).toBeFalsy();
    });

    it('should show disabled button when not connected', () => {
        store.dispatch(new ConnectionLost());
        fixture.detectChanges();
        const disabledButton = fixture.nativeElement.querySelector('a.disabled');

        expect(component.connected).toBeFalsy();
        expect(disabledButton).toBeTruthy();
    });
});
