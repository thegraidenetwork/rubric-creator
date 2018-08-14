import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRubricComponent } from './edit-rubric.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState } from '../../store/rubrics.state';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditRubricComponent', () => {
    let component: EditRubricComponent;
    let fixture: ComponentFixture<EditRubricComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [EditRubricComponent],
            imports: [
                FormsModule,
                StoreModule.forRoot(
                    {rubrics: rubricsReducer},
                    {initialState: getInitialState}
                ),
                RouterTestingModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditRubricComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
