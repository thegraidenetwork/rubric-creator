import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MockLocalStorageService {
    public getRubrics(): Observable<Array<RubricInterface> | undefined> {
        return new Subject<Array<RubricInterface>>();
    }

    public setRubrics(rubrics: Array<RubricInterface>): Observable<boolean> {
        return new Subject<boolean>();
    }

}
