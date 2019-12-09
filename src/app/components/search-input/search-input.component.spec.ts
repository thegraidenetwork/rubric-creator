import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchInputComponent } from './search-input.component';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { FormsModule } from '@angular/forms';
import { rubricsReducer } from '../../store/rubrics.reducer';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;
  let store: Store<RubricsStateInterface>;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [
        SearchInputComponent,
        Nl2brPipe,
      ],
      imports: [
        FormsModule,
        StoreModule.forRoot(
          {rubrics: rubricsReducer},
          {initialState: getInitialState}
        ),
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();

    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch UpdateListFilter when search term changes', () => {
    spyOn(store, 'dispatch').and.callThrough();

    component.updateSearchTerm();

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
