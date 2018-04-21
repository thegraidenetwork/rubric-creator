import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateRubricComponent } from './create-rubric.component';

describe('CreateRubricComponent', () => {
  let component: CreateRubricComponent;
  let fixture: ComponentFixture<CreateRubricComponent>;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [ CreateRubricComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
