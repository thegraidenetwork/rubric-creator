import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewRubricComponent } from './view-rubric.component';

xdescribe('ViewRubricComponent', () => {
  let component: ViewRubricComponent;
  let fixture: ComponentFixture<ViewRubricComponent>;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [ ViewRubricComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
