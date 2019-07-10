import { map } from 'rxjs/operators';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetRubricDataInterface } from '../interfaces/get-rubric-data.interface';
import { JsonbinCreateResponseInterface } from '../../object-interfaces/jsonbin-create-response.interface';
import { environment } from '../../../environments/environment';

@Injectable()
export class JsonbinHttpService implements GetRubricDataInterface {
    private readonly rootUrl = 'https://api.jsonbin.io';
    private readonly headers = {
        'collection-id': environment.jsonbinCollectionId,
        private: 'false',
        'secret-key': environment.jsonbinSecretKey,
    };

    constructor(private http: HttpClient) { }

    public getRubric(uuid: string): Observable<RubricInterface> {
        return this.get(`${this.rootUrl}/b/${uuid}`).pipe(
            // Set the rubric's uuid from the request
            map((result: RubricInterface) => ({ ...result, uuid })));
    }

    public createRubric(rubric: RubricInterface): Observable<RubricInterface> {
        return this.post(`${this.rootUrl}/b`, rubric).pipe(
            // Set the rubric's uuid from the response
            map((result: JsonbinCreateResponseInterface) => ({ ...result.data, uuid: result.id })));
    }

    private get(url: string): Observable<object> {
        return this.http.get(url, {headers: this.headers});
    }

    private post(url: string, payload: object): Observable<object> {
        return this.http.post(url, payload, {headers: this.headers});
    }

}
