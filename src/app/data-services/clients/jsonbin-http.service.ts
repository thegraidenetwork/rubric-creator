import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JsonbinHttpService {
    private readonly rootUrl = 'https://api.jsonbin.io';

    constructor(private http: HttpClient) {}

    public getRubric(uuid: string): Observable<RubricInterface> {
        return this.get(`${this.rootUrl}/b/${uuid}`).map(result => result as RubricInterface);
    }

    private get(url): Observable<object> {
        return this.http.get(url);
    }

}
