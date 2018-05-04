import { RubricInterface } from '../object-interfaces/rubric.interface';

export function getTotalPointsFromRubric(rubric: RubricInterface): number {
    let totalPoints = 0;

    if (
        rubric.components !== undefined &&
        rubric.components.length > 0
    )  {
        rubric.components.forEach(component => {
            component.levels.forEach(level => totalPoints += level.score !== undefined ? level.score : 0);
        });
    }

    return totalPoints;
}
