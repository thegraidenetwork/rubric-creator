import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRubricSaveButtonComponent } from './edit-rubric-save-button.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState } from '../../store/rubrics.state';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EditRubricSaveButtonComponent', () => {
    let component: EditRubricSaveButtonComponent;
    let fixture: ComponentFixture<EditRubricSaveButtonComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [EditRubricSaveButtonComponent],
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
        fixture = TestBed.createComponent(EditRubricSaveButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });
});
