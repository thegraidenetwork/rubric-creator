import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteRubricModalComponent } from './delete-rubric-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store, StoreModule } from '@ngrx/store';
import { getInitialState, RubricsStateInterface } from '../../store/rubrics.state';
import { rubricsReducer } from '../../store/rubrics.reducer';
import * as faker from 'faker';

class MockNgbActiveModal {
    public close(): void { return; }
}

describe('DeleteRubricModalComponent', () => {
    let component: DeleteRubricModalComponent;
    let fixture: ComponentFixture<DeleteRubricModalComponent>;
    let store: Store<RubricsStateInterface>;
    let mockNgbActiveModal;

    beforeEach(async(() => {
        mockNgbActiveModal = new MockNgbActiveModal();

        void TestBed.configureTestingModule({
            providers: [
                {
                    provide: NgbActiveModal,
                    useValue: mockNgbActiveModal,
                },
            ],
            declarations: [DeleteRubricModalComponent],
            imports: [
                StoreModule.forRoot(
                    {rubrics: rubricsReducer},
                    {initialState: getInitialState}
                ),
            ],
        }).compileComponents();

        store = TestBed.get(Store);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DeleteRubricModalComponent);
        component = fixture.componentInstance;

        component.rubric = {
            description: faker.lorem.words(),
            name: faker.lorem.words(),
            uuid: faker.random.uuid(),
        };

        fixture.detectChanges();
    });

    it('should render delete modal', () => {
        const header = fixture.nativeElement.querySelector('h4.modal-title');
        expect(header.textContent).toContain(component.rubric.name);
    });

    it('should call delete action when method called', () => {
        spyOn(mockNgbActiveModal, 'close').and.callThrough();
        spyOn(store, 'dispatch').and.callThrough();

        component.deleteRubric();

        expect(mockNgbActiveModal.close).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
