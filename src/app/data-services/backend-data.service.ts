import { RubricInterface } from '../object-interfaces/rubric.interface';
import { JsonbinHttpService } from './clients/jsonbin-http.service';
import { LocalStorageService } from './clients/local-storage.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { defaultRubricsArray } from './data/default-rubrics.array';
import { GetRubricDataInterface } from './interfaces/get-rubric-data.interface';
import { GetRubricsDataInterface } from './interfaces/get-rubrics-data.interface';

@Injectable()
export class BackendDataService implements GetRubricDataInterface, GetRubricsDataInterface {
    private rubrics = new BehaviorSubject<Array<RubricInterface>>(defaultRubricsArray);
    private _rubrics: Array<RubricInterface> = defaultRubricsArray;

    constructor(
        private jsonbin: JsonbinHttpService,
        private localStorage: LocalStorageService
    ) {}

    public getRubric(uuid: string): Observable<RubricInterface | undefined> {
        this.jsonbin.getRubric(uuid).subscribe(rubric => this.pushOrUpdateRubric(rubric));

        return this.getRubrics()
            .map(rubrics => rubrics !== undefined ?
                rubrics.find(rubric => rubric.uuid === uuid) :
                undefined
            );
    }

    public getRubrics(): Observable<Array<RubricInterface> | undefined> {
        this.localStorage.getRubrics()
            .filter(rubrics => rubrics !== undefined)
            .subscribe(rubrics => this.setRubrics(rubrics));

        return this.rubrics;
    }

    public createRubric(rubric: RubricInterface): Observable<RubricInterface> {
        return this.jsonbin.createRubric(rubric)
            .do(newRubric => this.pushOrUpdateRubric(newRubric));
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

    private setRubrics(rubrics: Array<RubricInterface> | undefined): void {
        if (rubrics !== undefined) {
            this._rubrics = rubrics;
            this.rubrics.next(rubrics);
            this.localStorage.setRubrics(rubrics).subscribe();
        }
    }
}
