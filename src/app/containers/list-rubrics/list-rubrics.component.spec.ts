import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRubricsComponent } from './list-rubrics.component';

describe('ViewRubricComponent', () => {
  let component: ListRubricsComponent;
  let fixture: ComponentFixture<ListRubricsComponent>;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [ ListRubricsComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRubricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
