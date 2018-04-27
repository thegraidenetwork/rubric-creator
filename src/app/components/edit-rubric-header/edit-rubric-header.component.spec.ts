import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRubricHeaderComponent } from './edit-rubric-header.component';

describe('EditRubricHeaderComponent', () => {
  let component: EditRubricHeaderComponent;
  let fixture: ComponentFixture<EditRubricHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRubricHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRubricHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
