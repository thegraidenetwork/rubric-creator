import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJumbotronComponent } from './home-jumbotron.component';

describe('HomeJumbotronComponent', () => {
  let component: HomeJumbotronComponent;
  let fixture: ComponentFixture<HomeJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
