import { RubricInterface } from '../object-interfaces/rubric.interface';

export function getMaxLevelsFromRubric(rubric: RubricInterface | undefined): number {
    if (
        rubric !== undefined &&
        rubric.components !== undefined &&
        rubric.components.length > 0
    )  {
        return Math.max(...rubric.components.map(c => c.levels.length));
    }

    return 0;
}
