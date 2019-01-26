import { filter, map, tap } from 'rxjs/operators';
import { RubricInterface } from '../object-interfaces/rubric.interface';
import { JsonbinHttpService } from './clients/jsonbin-http.service';
import { LocalStorageService } from './clients/local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { defaultRubricIds, defaultRubricsArray } from './data/default-rubrics.array';
import { GetRubricDataInterface } from './interfaces/get-rubric-data.interface';
import { GetRubricsDataInterface } from './interfaces/get-rubrics-data.interface';

const filterCustomRubrics = (rubrics: Array<RubricInterface>): Array<RubricInterface> => {
    return rubrics.filter(
        rubric => (rubric.uuid !== undefined) ?
            !defaultRubricIds.includes(rubric.uuid) :
            false
    );
};

const appendDefaultRubrics = (rubrics: Array<RubricInterface> | undefined): Array<RubricInterface> | undefined => {
    return (rubrics !== undefined) ? defaultRubricsArray.concat(rubrics) : rubrics;
};

@Injectable()
export class BackendDataService implements GetRubricDataInterface, GetRubricsDataInterface {
    private rubrics = new BehaviorSubject<Array<RubricInterface>>(defaultRubricsArray);
    private _rubrics: Array<RubricInterface> = defaultRubricsArray;

    constructor(
        private jsonbin: JsonbinHttpService,
        private localStorage: LocalStorageService
    ) { }

    public getRubric(uuid: string): Observable<RubricInterface | undefined> {
        this.jsonbin.getRubric(uuid).subscribe(rubric => this.pushOrUpdateRubric(rubric));

        return this.getRubrics().pipe(
            map(rubrics => rubrics.find(rubric => rubric.uuid === uuid)));
    }

    public getRubrics(): Observable<Array<RubricInterface>> {
        this.localStorage.getRubrics().pipe(
            filter(rubrics => rubrics !== undefined),
            map(appendDefaultRubrics))
            .subscribe(rubrics => this.setRubrics(rubrics));

        return this.rubrics;
    }

    public createRubric(rubric: RubricInterface): Observable<RubricInterface> {
        return this.jsonbin.createRubric(rubric).pipe(
            tap(newRubric => this.pushOrUpdateRubric(newRubric)));
    }

    public deleteRubric(uuid?: string): Observable<Array<RubricInterface>> {
        if (uuid !== undefined) {
            const filteredRubrics = this._rubrics.filter(rubric => rubric.uuid !== uuid);
            const resp = this.saveCustomRubricsToLocalStorage(filteredRubrics);

            return resp.pipe(map(() => filteredRubrics));
        }

        throw new Error('Rubric could not be deleted.');
    }

    private pushOrUpdateRubric(rubric: RubricInterface): void {
        let updated = false;

        this._rubrics = this._rubrics.map((existingRubric: RubricInterface) => {
            if (existingRubric.uuid === rubric.uuid) {
                updated = true;

                return rubric;
            }

            return existingRubric;
        });

        if (!updated) {
            this._rubrics.push(rubric);
        }

        this.setRubrics(this._rubrics);
    }

    private setRubrics = (rubrics?: Array<RubricInterface>): void => {
        if (rubrics !== undefined) {
            this._rubrics = rubrics;
            this.rubrics.next(rubrics);

            this.saveCustomRubricsToLocalStorage(rubrics);
        }
    };

    private saveCustomRubricsToLocalStorage(rubrics: Array<RubricInterface>): Observable<boolean> {
        const customRubrics = filterCustomRubrics(rubrics);
        const storageResponse = this.localStorage.setRubrics(customRubrics);
        storageResponse.subscribe();

        return storageResponse;
    }
}
