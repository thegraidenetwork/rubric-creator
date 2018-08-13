import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricActionButtonGroupComponent } from './rubric-action-button-group.component';

describe('RubricActionButtonGroupComponent', () => {
  let component: RubricActionButtonGroupComponent;
  let fixture: ComponentFixture<RubricActionButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricActionButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricActionButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
