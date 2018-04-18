import { StateInterface } from './rubrics.state';
import { RubricsAction } from './rubrics.actions';

export const SELECT_RUBRIC = 'SELECT_RUBRIC';
export const GET_RUBRIC_FOUND = 'GET_RUBRIC_FOUND';
export const GET_RUBRIC_FAILED = 'GET_RUBRIC_FAILED';

export function rubricsReducer(state: StateInterface, action: RubricsAction): StateInterface {
    switch (action.type) {
        case SELECT_RUBRIC:
            return state;

        case GET_RUBRIC_FOUND:
            state.currentRubric = action.payload;

            return state;

        case GET_RUBRIC_FAILED:
            state.currentRubric = undefined;

            return state;

        default:
            return state;
    }
}
