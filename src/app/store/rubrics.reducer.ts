import { RubricsStateInterface } from './rubrics.state';
import { RubricsActionsUnion, RubricsActionTypes } from './rubrics.actions';
import { RubricInterface } from '../object-interfaces/rubric.interface';

function getMaxLevelsCount(rubric: RubricInterface): number {
    return (rubric.components !== undefined && rubric.components.length > 0) ?
        Math.max(...rubric.components.map(c => c.levels.length)) :
        0;
}

export function rubricsReducer(state: RubricsStateInterface, action: RubricsActionsUnion): RubricsStateInterface {
    switch (action.type) {
        case RubricsActionTypes.GetRubricSuccess:
            const maxLevelsCount = getMaxLevelsCount(action.payload as RubricInterface);

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
