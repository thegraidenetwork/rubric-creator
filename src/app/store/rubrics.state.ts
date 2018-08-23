import { RubricInterface } from '../object-interfaces/rubric.interface';
import { DisplayableErrorInterface } from '../object-interfaces/displayable-error.interface';

export interface RubricsStateInterface {
    currentRubric: RubricInterface | undefined;
    allRubrics: Array<RubricInterface> | undefined;
    error: DisplayableErrorInterface | undefined;
    saving: boolean;
    deleting: boolean;
    pageTitle: string;
    connected: boolean;
}

export function getInitialState(): {rubrics: RubricsStateInterface} {
    return {
        rubrics: {
            currentRubric: undefined,
            allRubrics: undefined,
            error: undefined,
            saving: false,
            deleting: false,
            pageTitle: 'Rubric Creator by The Graide Network',
            connected: true,
        },
    };
}
