import { RubricsStateInterface } from './rubrics.state';
import { RubricsActionsUnion, RubricsActionTypes } from './rubrics.actions';
import { RubricInterface } from '../object-interfaces/rubric.interface';

function _getMaxLevelsCount(rubric: RubricInterface): number {
    return (rubric.components !== undefined && rubric.components.length > 0) ?
        Math.max(...rubric.components.map(c => c.levels.length)) :
        0;
}

export function rubricsReducer(state: RubricsStateInterface, action: RubricsActionsUnion): RubricsStateInterface {
    switch (action.type) {
        case RubricsActionTypes.CreateRubricSuccess:
        case RubricsActionTypes.GetRubricSuccess:
            const maxLevelsCount = _getMaxLevelsCount(action.payload);

            return {
                ...state,
                currentRubric: { ...action.payload, maxLevelsCount },
                error: undefined,
            };

        case RubricsActionTypes.GetRubricsSuccess:
            return {
                ...state,
                allRubrics: action.payload,
                error: undefined,
            };

        case RubricsActionTypes.CreateRubricError:
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

        case RubricsActionTypes.SetBreadcrumbs:
            return {...state, breadcrumbs: action.payload};

        case RubricsActionTypes.GetRubrics:
        case RubricsActionTypes.CreateRubric:
        default:
            return state;
    }
}
