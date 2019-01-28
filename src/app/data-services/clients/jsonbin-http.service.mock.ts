import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MockJsonbinHttpService {
    public getRubric(): Observable<Array<RubricInterface> | undefined> {
        return new Subject<Array<RubricInterface>>();
    }

    public createRubric(rubric: RubricInterface): Observable<RubricInterface> {
        return new Subject<RubricInterface>();
    }

}
