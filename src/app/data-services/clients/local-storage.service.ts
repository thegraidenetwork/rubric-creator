import { map } from 'rxjs/operators';
import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetRubricsDataInterface } from '../interfaces/get-rubrics-data.interface';

@Injectable()
export class LocalStorageService implements GetRubricsDataInterface {
    constructor(private localStorage: LocalStorage) { }

    public getRubrics(): Observable<Array<RubricInterface> | undefined> {
        return this.get<Array<RubricInterface>>('rubrics');
    }

    public setRubrics(rubrics: Array<RubricInterface>): Observable<boolean> {
        return this.set<Array<RubricInterface>>('rubrics', rubrics);
    }

    private get<T>(key: string): Observable<T | undefined> {
        return this.localStorage.getItem<T>(key).pipe(
            // Converts null to undefined because we don't like null
            map((rubrics: T | null) => rubrics === null ? undefined : rubrics));
    }

    private set<T>(key: string, value: T): Observable<boolean> {
        return this.localStorage.setItem(key, value);
    }

}
