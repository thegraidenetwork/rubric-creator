import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetRubricDataInterface } from '../interfaces/get-rubric-data.interface';

interface JsonbinCreateResponseInterface {
    id: string;
    data: RubricInterface;
}

@Injectable()
export class JsonbinHttpService implements GetRubricDataInterface {
    private readonly rootUrl = 'https://api.jsonbin.io';

    constructor(private http: HttpClient) {}

    public getRubric(uuid: string): Observable<RubricInterface> {
        return this.get(`${this.rootUrl}/b/${uuid}`)
            // Set the rubric's uuid from the request
            .map((result: RubricInterface) => ({...result, uuid}));
    }

    public createRubric(rubric: RubricInterface): Observable<RubricInterface> {
        return this.post(`${this.rootUrl}/b`, rubric)
            // Set the rubric's uuid from the response
            .map((result: JsonbinCreateResponseInterface) => ({...result.data, uuid: result.id}));
    }

    private get(url: string): Observable<object> {
        return this.http.get(url);
    }

    private post(url: string, payload: object): Observable<object> {
        return this.http.post(url, payload);
    }

}
