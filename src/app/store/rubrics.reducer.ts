import { RubricsStateInterface } from './rubrics.state';
import { RubricsActionsUnion, RubricsActionTypes } from './rubrics.actions';
import { RubricInterface } from '../object-interfaces/rubric.interface';

function _getMaxLevelsCount(rubric: RubricInterface): number {
    if (
        rubric.components !== undefined &&
        rubric.components.length > 0
    )  {
        return Math.max(...rubric.components.map(c => c.levels.length));
    }

    return 0;
}

export function rubricsReducer(state: RubricsStateInterface, action: RubricsActionsUnion): RubricsStateInterface {
    switch (action.type) {
        case RubricsActionTypes.CreateRubricSuccess:
        case RubricsActionTypes.GetRubricSuccess:
        case RubricsActionTypes.UpdateCurrentRubric:
            return {
                ...state,
                currentRubric: {
                    ...action.payload,
                    maxLevelsCount: _getMaxLevelsCount(action.payload),
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
