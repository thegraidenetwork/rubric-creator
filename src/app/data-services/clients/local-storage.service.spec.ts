import { LocalStorageService } from './local-storage.service';
import { inject, TestBed } from '@angular/core/testing';
import { LocalStorage, MockLocalDatabase } from '@ngx-pwa/local-storage';
import * as faker from 'faker';

describe('LocalStorageService', () => {
    let mockLocalStorage: MockLocalDatabase;

    beforeEach(() => {
        mockLocalStorage = new MockLocalDatabase();

        TestBed.configureTestingModule({
            providers: [
                LocalStorageService,
                {
                    provide: LocalStorage,
                    useValue: mockLocalStorage,
                },
            ],
        });
    });

    it('should get rubrics from localStorage', inject(
        [LocalStorageService],
        (service: LocalStorageService) => {
            spyOn(mockLocalStorage, 'getItem').and.callThrough();

            service.getRubrics().subscribe();

            expect(mockLocalStorage.getItem).toHaveBeenCalledTimes(1);
            expect(mockLocalStorage.getItem).toHaveBeenCalledWith('rubrics');
        }
    ));

    it('should set rubrics to localStorage', inject(
        [LocalStorageService],
        (service: LocalStorageService) => {
            const rubrics = [{
                name: faker.random.words(),
                uuid: faker.random.uuid(),
            }];
            spyOn(mockLocalStorage, 'setItem').and.callThrough();

            service.setRubrics(rubrics).subscribe();

            expect(mockLocalStorage.setItem).toHaveBeenCalledTimes(1);
            expect(mockLocalStorage.setItem).toHaveBeenCalledWith('rubrics', rubrics);
        }
    ));
});
