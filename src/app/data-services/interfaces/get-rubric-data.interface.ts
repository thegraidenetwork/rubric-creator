import { Observable } from 'rxjs/Observable';
import { RubricInterface } from '../../object-interfaces/rubric.interface';

export interface GetRubricDataInterface {
    getRubric(uuid: string): Observable<RubricInterface | undefined>;
}
