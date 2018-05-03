import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRubricTableBottomComponent } from './edit-rubric-table-bottom.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState } from '../../store/rubrics.state';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EditRubricSaveButtonComponent', () => {
    let component: EditRubricTableBottomComponent;
    let fixture: ComponentFixture<EditRubricTableBottomComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [EditRubricTableBottomComponent],
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
        fixture = TestBed.createComponent(EditRubricTableBottomComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });
});
