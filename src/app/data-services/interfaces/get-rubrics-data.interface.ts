import { Observable } from 'rxjs';
import { RubricInterface } from '../../object-interfaces/rubric.interface';

export interface GetRubricsDataInterface {
    getRubrics(): Observable<Array<RubricInterface> | undefined>;
}
