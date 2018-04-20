import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RubricHeaderComponent } from './rubric-header.component';

xdescribe('PageAlertComponent', () => {
  let component: RubricHeaderComponent;
  let fixture: ComponentFixture<RubricHeaderComponent>;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [ RubricHeaderComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
