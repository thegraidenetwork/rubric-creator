import { RubricInterface } from '../interfaces/rubric.interface';

export interface RubricsStateInterface {
    currentRubric: RubricInterface | undefined;
    allRubrics: Array<RubricInterface> | undefined;
    error: object | undefined;
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
