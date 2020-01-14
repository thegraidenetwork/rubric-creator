import { RubricsStateInterface } from './rubrics.state';
import { RubricsActionsUnion, RubricsActionTypes } from './rubrics.actions';
import { getMaxLevelsFromRubric } from '../functions/get-max-levels-from-rubric.function';
import { getTotalPointsFromRubric } from '../functions/get-total-points-from-rubric.function';
import { RubricInterface } from '../object-interfaces/rubric.interface';

function _resetRubric(rubric: RubricInterface | undefined): RubricInterface | undefined {
    return (rubric !== undefined) ? {
        ...rubric,
        maxLevelsCount: getMaxLevelsFromRubric(rubric),
        totalPoints: getTotalPointsFromRubric(rubric),
    } : rubric;
}

export function rubricsReducer(state: RubricsStateInterface, action: RubricsActionsUnion): RubricsStateInterface {
    switch (action.type) {
        case RubricsActionTypes.GetRubricSuccess:
        case RubricsActionTypes.UpdateCurrentRubric:
        case RubricsActionTypes.CreateRubricSuccess:
            return {
                ...state,
                currentRubric: _resetRubric(action.payload),
                error: undefined,
                saving: false,
            };

        case RubricsActionTypes.GetRubricsSuccess:
        case RubricsActionTypes.DeleteRubricSuccess:
            return {
                ...state,
                allRubrics: action.payload,
                error: undefined,
                deleting: false,
            };

        case RubricsActionTypes.CreateRubricError:
        case RubricsActionTypes.GetRubricError:
        case RubricsActionTypes.GetRubricsError:
        case RubricsActionTypes.DeleteRubricError:
            return {
                ...state,
                currentRubric: undefined,
                allRubrics: [],
                error: action.payload,
                saving: false,
                deleting: false,
            };

        case RubricsActionTypes.DeleteRubric:
            return {
                ...state,
                currentRubric: undefined,
                deleting: true,
            };

        case RubricsActionTypes.GetRubric:
            return { ...state, currentRubric: undefined };

        case RubricsActionTypes.SetPageTitle:
            return { ...state, pageTitle: action.payload };

        case RubricsActionTypes.CreateRubric:
            return { ...state, saving: true };

        case RubricsActionTypes.ConnectionMade:
            return { ...state, connected: true };

        case RubricsActionTypes.ConnectionLost:
            return { ...state, connected: false };

        case RubricsActionTypes.UpdateListFilter:
            return {
                ...state,
                listFilter: action.payload,
            };

        case RubricsActionTypes.GetRubrics:
        default:
            return state;
    }
}
