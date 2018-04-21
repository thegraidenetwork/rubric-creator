import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewRubricComponent } from './view-rubric.component';
import { Store, StoreModule } from '@ngrx/store';
import { rubricsReducer } from '../../store/rubrics.reducer';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RubricTableBodyComponent } from '../../components/rubric-table-body/rubric-table-body.component';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';

describe('ViewRubricComponent', () => {
    let component: ViewRubricComponent;
    let fixture: ComponentFixture<ViewRubricComponent>;
    let store: Store<RubricsStateInterface>;
    let router: Router;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [
                ViewRubricComponent,
                RubricTableBodyComponent,
                Nl2brPipe,
            ],
            imports: [
                StoreModule.forRoot(
                    {rubrics: rubricsReducer},
                    {initialState: getInitialState}
                ),
                RouterTestingModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();

        store = TestBed.get(Store);
        router = TestBed.get(Router);

        spyOn(store, 'dispatch').and.callThrough();
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
