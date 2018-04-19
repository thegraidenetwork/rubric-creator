import { Observable } from 'rxjs/Observable';
import { RubricInterface } from '../../object-interfaces/rubric.interface';

export interface GetRubricsDataInterface {
    getRubrics(): Observable<Array<RubricInterface>>;
}
