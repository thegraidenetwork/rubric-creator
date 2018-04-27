import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRubricTableHeadComponent } from './edit-rubric-table-head.component';

describe('EditRubricTableHeadComponent', () => {
  let component: EditRubricTableHeadComponent;
  let fixture: ComponentFixture<EditRubricTableHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRubricTableHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRubricTableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
