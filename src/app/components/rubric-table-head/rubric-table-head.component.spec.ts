import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RubricTableHeadComponent } from './rubric-table-head.component';

describe('RubricTableHeadComponent', () => {
  let component: RubricTableHeadComponent;
  let fixture: ComponentFixture<RubricTableHeadComponent>;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [ RubricTableHeadComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricTableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
