import { Observable } from 'rxjs';
import { RubricInterface } from '../../object-interfaces/rubric.interface';

export interface GetRubricDataInterface {
    getRubric(uuid: string): Observable<RubricInterface | undefined>;
}
