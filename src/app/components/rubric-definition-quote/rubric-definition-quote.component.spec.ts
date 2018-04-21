import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RubricDefinitionQuoteComponent } from './rubric-definition-quote.component';

describe('RubricDefinitionQuoteComponent', () => {
  let component: RubricDefinitionQuoteComponent;
  let fixture: ComponentFixture<RubricDefinitionQuoteComponent>;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [ RubricDefinitionQuoteComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricDefinitionQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
