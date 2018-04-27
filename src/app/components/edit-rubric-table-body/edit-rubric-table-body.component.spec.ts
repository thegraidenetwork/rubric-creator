import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRubricTableBodyComponent } from './edit-rubric-table-body.component';

describe('EditRubricTableBodyComponent', () => {
  let component: EditRubricTableBodyComponent;
  let fixture: ComponentFixture<EditRubricTableBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRubricTableBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRubricTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
