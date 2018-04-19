import { BackendDataInterface } from './interfaces/backend-data.interface';
import { RubricInterface } from '../object-interfaces/rubric.interface';
import { JsonbinHttpService } from './clients/jsonbin-http.service';
import { LocalStorageService } from './clients/local-storage.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { defaultRubrics } from './data/defaultRubrics';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BackendDataService implements BackendDataInterface {
    private rubrics = new BehaviorSubject<Array<RubricInterface>>(defaultRubrics);
    private _rubrics: Array<RubricInterface> = defaultRubrics;

    constructor(
        private jsonbin: JsonbinHttpService,
        private localStorage: LocalStorageService
    ) {}

    public getRubric(uuid: string): Subject<RubricInterface> {
        this.jsonbin.getRubric(uuid).subscribe(rubric => this.pushOrUpdate(rubric));

        return this.getRubrics().map(rubrics => rubrics.find(rubric => rubric.uuid === uuid));
    }

    public getRubrics(): Observable<Array<RubricInterface>> {
        this.localStorage.getRubrics()
            .filter(rubrics => rubrics !== null)
            .subscribe(rubrics => this.setRubrics(rubrics));

        return this.rubrics;
    }

    private pushOrUpdate(rubric: RubricInterface): void {
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

    private setRubrics(rubrics: Array<RubricInterface>): void {
        this._rubrics = rubrics;
        this.rubrics.next(rubrics);
        this.localStorage.setRubrics(rubrics).subscribe();
    }
}
