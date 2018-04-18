import { RubricInterface } from '../interfaces/rubric.interface';

export interface StateInterface {
    currentRubric: RubricInterface | undefined;
    allRubrics: Array<RubricInterface> | undefined;
    errorMessage: string | undefined;
}

export function getInitialState(): {rubrics: StateInterface} {
    return {
        rubrics: {
            currentRubric: undefined,
            allRubrics: undefined,
            errorMessage: undefined,
        },
    };
}
