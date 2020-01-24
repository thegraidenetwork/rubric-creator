import { RubricInterface } from '../object-interfaces/rubric.interface';

export function getTotalPointsFromRubric(rubric: RubricInterface): number {
    let totalPoints = 0;

    if (
        rubric.components !== undefined &&
        rubric.components.length > 0
    )  {
        rubric.components.forEach(component => {
            const level_max_scores = component.levels.map(level => level.score !== undefined ? Number(level.score) : 0);
            totalPoints += Math.max(...level_max_scores);
        });
    }

    return totalPoints;
}
