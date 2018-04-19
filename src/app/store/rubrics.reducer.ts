import { RubricsStateInterface } from './rubrics.state';
import { RubricsActionsUnion, RubricsActionTypes } from './rubrics.actions';

export function rubricsReducer(state: RubricsStateInterface, action: RubricsActionsUnion): RubricsStateInterface {
    switch (action.type) {
        case RubricsActionTypes.GetRubric:
            return state;

        case RubricsActionTypes.GetRubricSuccess:
            return {
                ...state,
                currentRubric: action.payload,
                error: undefined,
            };

        case RubricsActionTypes.GetRubricError:
            return {
                ...state,
                currentRubric: undefined,
                error: action.payload,
            };

        default:
            return state;
    }
}
