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
    private rubric = new Subject<RubricInterface>();
    private rubrics = new BehaviorSubject<Array<RubricInterface>>(defaultRubrics);

    constructor(
        private jsonbin: JsonbinHttpService,
        private localStorage: LocalStorageService
    ) {}

    public getRubric(uuid: string): Subject<RubricInterface> {
        this.jsonbin.getRubric(uuid).subscribe(rubric => this.rubric.next(rubric));

        return this.rubric;
    }

    public getRubrics(): Observable<Array<RubricInterface>> {
        this.localStorage.getRubrics().subscribe(rubrics => this.rubrics.next(rubrics));

        return this.rubrics;
    }
}
