import { inject, TestBed } from '@angular/core/testing';
import * as faker from 'faker';
import { JsonbinHttpService } from './jsonbin-http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RubricInterface } from '../../object-interfaces/rubric.interface';

describe('JsonbinHttpService', () => {
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
                description: faker.random.words(),
                name: faker.random.words(),
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

    it('should create rubric and attach uuid', inject(
        [HttpTestingController, JsonbinHttpService],
        (http: HttpTestingController, service: JsonbinHttpService) => {
            let result;
            const rubric: RubricInterface = {
                description: faker.random.words(),
                name: faker.random.words(),
            };
            const response = {
                data: rubric,
                id: faker.random.uuid(),
            };

            service.createRubric(rubric).subscribe(data => result = data);

            // Set up the request and send fake response
            const req = http.expectOne('https://api.jsonbin.io/b');
            expect(req.request.method).toEqual('POST');
            req.flush(response);

            // Assert that there are no outstanding requests.
            http.verify();
            expect(result).toEqual({...response.data, uuid: response.id});
        }
    ));
});
