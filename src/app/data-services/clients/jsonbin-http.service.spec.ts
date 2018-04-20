import { LocalStorageService } from './local-storage.service';
import { inject, TestBed } from '@angular/core/testing';
import * as faker from 'faker';
import { JsonbinHttpService } from './jsonbin-http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LocalStorageService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [JsonbinHttpService],
            imports: [HttpClientTestingModule],
        });
    });

    it('should get rubric and attach uuid', inject(
        [HttpTestingController, JsonbinHttpService],
        (http: HttpTestingController, service: JsonbinHttpService) => {
            let result;
            const uuid = faker.random.uuid();
            const response = {
                name: faker.random.words(),
                description: faker.random.words(),
            };

            service.getRubric(uuid).subscribe(data => result = data);

            // Set up the request and send fake response
            const req = http.expectOne(`https://api.jsonbin.io/b/${uuid}`);
            expect(req.request.method).toEqual('GET');
            req.flush(response);

            // Assert that there are no outstanding requests.
            http.verify();
            expect(result).toEqual({...response, uuid});
        }
    ));
});