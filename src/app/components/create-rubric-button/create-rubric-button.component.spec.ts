import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateRubricButtonComponent } from './create-rubric-button.component';

xdescribe('CreateRubricButtonComponent', () => {
  let component: CreateRubricButtonComponent;
  let fixture: ComponentFixture<CreateRubricButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRubricButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRubricButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
