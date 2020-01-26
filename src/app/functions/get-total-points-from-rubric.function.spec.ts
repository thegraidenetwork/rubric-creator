import * as faker from 'faker';
import { RubricInterface } from '../object-interfaces/rubric.interface';
import { getTotalPointsFromRubric } from './get-total-points-from-rubric.function';

describe('Function: getTotalPointsFromRubric', () => {
    it('should get total points in rubric', () => {
        const rubric: RubricInterface = {
            components: [
                {
                    levels: [
                        {score: 0},
                        {score: 4},
                        {score: 8},
                    ],
                    name: faker.lorem.words(),
                },
                {
                    levels: [
                        {score: 1},
                        {score: 2},
                    ],
                    name: faker.lorem.words(),
                },
            ],
            name: faker.lorem.words(),
        };

        const result = getTotalPointsFromRubric(rubric);

        void expect(result).toBe(10);
    });
});
