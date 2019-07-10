import { inject, TestBed } from '@angular/core/testing';
import * as faker from 'faker';
import { BackendDataService } from './backend-data.service';
import { LocalStorageService } from './clients/local-storage.service';
import { JsonbinHttpService } from './clients/jsonbin-http.service';
import { MockLocalStorageService } from './clients/local-storage.service.mock';
import { MockJsonbinHttpService } from './clients/jsonbin-http.service.mock';
import { RubricInterface } from '../object-interfaces/rubric.interface';

describe('BackendDataService', () => {
    let mockLocalStorageService: MockLocalStorageService;
    let mockJsonbinHttpService: MockJsonbinHttpService;

    beforeEach(() => {
        mockLocalStorageService = new MockLocalStorageService();
        mockJsonbinHttpService = new MockJsonbinHttpService();

        TestBed.configureTestingModule({
            providers: [
                BackendDataService,
                {
                    provide: JsonbinHttpService,
                    useValue: mockJsonbinHttpService,
                },
                {
                    provide: LocalStorageService,
                    useValue: mockLocalStorageService,
                },
            ],
        });
    });

    it('should get single rubric by uuid', inject(
        [BackendDataService],
        (service: BackendDataService) => {
            const uuid = faker.random.uuid();
            spyOn(mockLocalStorageService, 'getRubrics').and.callThrough();
            spyOn(mockJsonbinHttpService, 'getRubric').and.callThrough();

            service.getRubric(uuid);

            void expect(mockLocalStorageService.getRubrics).toHaveBeenCalledTimes(1);
            void expect(mockJsonbinHttpService.getRubric).toHaveBeenCalledTimes(1);
        }
    ));

    it('should get rubrics when returned from localstorage', inject(
        [BackendDataService],
        (service: BackendDataService) => {
            spyOn(mockLocalStorageService, 'getRubrics').and.callThrough();

            service.getRubrics();

            void expect(mockLocalStorageService.getRubrics).toHaveBeenCalledTimes(1);
        }
    ));

    it('should create rubric with jsonbin service', inject(
        [BackendDataService],
        (service: BackendDataService) => {
            spyOn(mockJsonbinHttpService, 'createRubric').and.callThrough();
            const rubric: RubricInterface = {
                name: faker.lorem.words(),
            };

            service.createRubric(rubric);

            void expect(mockJsonbinHttpService.createRubric).toHaveBeenCalledTimes(1);
        }
    ));
});
