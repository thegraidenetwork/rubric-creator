import { inject, TestBed } from '@angular/core/testing';
import * as faker from 'faker';
import { BackendDataService } from './backend-data.service';
import { LocalStorageService } from './clients/local-storage.service';
import { JsonbinHttpService } from './clients/jsonbin-http.service';

xdescribe('BackendDataService', () => {
    let mockLocalStorageService;
    let mockJsonbinHttpService;

    beforeEach(() => {
        mockLocalStorageService = {};
        mockJsonbinHttpService = {};

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
            //
        }
    ));

    it('should get rubrics when not null', inject(
        [BackendDataService],
        (service: BackendDataService) => {
            //
        }
    ));

    it('should get default rubrics when null', inject(
        [BackendDataService],
        (service: BackendDataService) => {
            //
        }
    ));
});
