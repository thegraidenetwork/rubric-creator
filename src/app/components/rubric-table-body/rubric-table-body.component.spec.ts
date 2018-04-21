import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RubricTableBodyComponent } from './rubric-table-body.component';

xdescribe('RubricTableBodyComponent', () => {
  let component: RubricTableBodyComponent;
  let fixture: ComponentFixture<RubricTableBodyComponent>;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [ RubricTableBodyComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
