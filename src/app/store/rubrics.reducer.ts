import { RubricsStateInterface } from './rubrics.state';
import { RubricsActionsUnion, RubricsActionTypes } from './rubrics.actions';
import { getMaxLevelsFromRubric } from '../functions/get-max-levels-from-rubric.function';
import { getTotalPointsFromRubric } from '../functions/get-total-points-from-rubric.function';

export function rubricsReducer(state: RubricsStateInterface, action: RubricsActionsUnion): RubricsStateInterface {
    switch (action.type) {
        case RubricsActionTypes.GetRubricSuccess:
        case RubricsActionTypes.UpdateCurrentRubric:
        case RubricsActionTypes.CreateRubricSuccess:
            return {
                ...state,
                currentRubric: {
                    ...action.payload,
                    maxLevelsCount: getMaxLevelsFromRubric(action.payload),
                    totalPoints: getTotalPointsFromRubric(action.payload),
                },
                error: undefined,
                saving: false,
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
                saving: false,
            };

        case RubricsActionTypes.GetRubric:
            return {...state, currentRubric: undefined};

        case RubricsActionTypes.SetBreadcrumbs:
            return {...state, breadcrumbs: action.payload};

        case RubricsActionTypes.CreateRubric:
            return {...state, saving: true};

        case RubricsActionTypes.GetRubrics:
        default:
            return state;
    }
}
