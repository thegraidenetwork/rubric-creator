import { Action } from '@ngrx/store';
import { RubricInterface } from '../interfaces/rubric.interface';

export interface RubricsAction extends Action {
    payload: RubricInterface;
}
