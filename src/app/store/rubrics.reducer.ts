import { RubricsStateInterface } from './rubrics.state';
import { RubricsActionsUnion, RubricsActionTypes } from './rubrics.actions';

export function rubricsReducer(state: RubricsStateInterface, action: RubricsActionsUnion): RubricsStateInterface {
    switch (action.type) {
        case RubricsActionTypes.GetRubricSuccess:
            return {
                ...state,
                currentRubric: action.payload,
                error: undefined,
            };

        case RubricsActionTypes.GetRubricsSuccess:
            return {
                ...state,
                allRubrics: action.payload,
                error: undefined,
            };

        case RubricsActionTypes.GetRubricError:
        case RubricsActionTypes.GetRubricsError:
            return {
                ...state,
                currentRubric: undefined,
                allRubrics: undefined,
                error: action.payload,
            };

        case RubricsActionTypes.GetRubric:
            return {
                ...state,
                currentRubric: undefined,
            };

        case RubricsActionTypes.GetRubrics:
            return state;

        default:
            return state;
    }
}
