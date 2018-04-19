import { RubricInterface } from '../object-interfaces/rubric.interface';
import { DisplayableErrorInterface } from '../object-interfaces/displayable-error.interface';

export interface RubricsStateInterface {
    currentRubric: RubricInterface | undefined;
    allRubrics: Array<RubricInterface> | undefined;
    error: DisplayableErrorInterface | undefined;
}

export function getInitialState(): {rubrics: RubricsStateInterface} {
    return {
        rubrics: {
            currentRubric: undefined,
            allRubrics: undefined,
            error: undefined,
        },
    };
}
