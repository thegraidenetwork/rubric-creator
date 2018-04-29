import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRubricSaveButtonComponent } from './edit-rubric-save-button.component';

describe('EditRubricHeaderComponent', () => {
  let component: EditRubricSaveButtonComponent;
  let fixture: ComponentFixture<EditRubricSaveButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRubricSaveButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRubricSaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
