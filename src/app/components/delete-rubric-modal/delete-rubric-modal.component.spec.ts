import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRubricModalComponent } from './delete-rubric-modal.component';

describe('DeleteRubricModalComponent', () => {
  let component: DeleteRubricModalComponent;
  let fixture: ComponentFixture<DeleteRubricModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRubricModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRubricModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
