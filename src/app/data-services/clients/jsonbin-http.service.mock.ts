import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MockJsonbinHttpService {
    public getRubric(): Observable<Array<RubricInterface> | undefined> {
        return new Subject<Array<RubricInterface>>();
    }

    public createRubric(rubric: RubricInterface): Observable<RubricInterface> {
        return new Subject<RubricInterface>();
    }

}
