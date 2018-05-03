import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateRubricComponent } from './create-rubric.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState } from '../../store/rubrics.state';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CreateRubricComponent', () => {
    let component: CreateRubricComponent;
    let fixture: ComponentFixture<CreateRubricComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [CreateRubricComponent],
            imports: [
                FormsModule,
                StoreModule.forRoot(
                    {rubrics: rubricsReducer},
                    {initialState: getInitialState}
                ),
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateRubricComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });
});
