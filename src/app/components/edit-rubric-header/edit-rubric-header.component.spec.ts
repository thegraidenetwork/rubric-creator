import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditRubricHeaderComponent } from './edit-rubric-header.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState } from '../../store/rubrics.state';

describe('EditRubricHeaderComponent', () => {
    let component: EditRubricHeaderComponent;
    let fixture: ComponentFixture<EditRubricHeaderComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [EditRubricHeaderComponent],
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
        fixture = TestBed.createComponent(EditRubricHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });
});
