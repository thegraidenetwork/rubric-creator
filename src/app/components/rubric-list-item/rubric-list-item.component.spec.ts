import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricListItemComponent } from './rubric-list-item.component';

describe('RubricListItemComponent', () => {
  let component: RubricListItemComponent;
  let fixture: ComponentFixture<RubricListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
