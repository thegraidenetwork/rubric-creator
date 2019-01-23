import * as faker from 'faker';
import { RubricInterface } from '../object-interfaces/rubric.interface';
import { getTotalPointsFromRubric } from './get-total-points-from-rubric.function';

describe('Function: getTotalPointsFromRubric', () => {
    it('should get total points in rubric', () => {
        const scores = [
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
            faker.random.number(),
        ];
        const rubric: RubricInterface = {
            components: [
                {
                    levels: [
                        {score: scores[0]},
                        {score: scores[1]},
                        {score: scores[2]},
                    ],
                    name: faker.lorem.words(),
                },
                {
                    levels: [
                        {score: scores[3]},
                        {score: scores[4]},
                    ],
                    name: faker.lorem.words(),
                },
            ],
            name: faker.lorem.words(),
        };

        const result = getTotalPointsFromRubric(rubric);

        expect(result).toBe(scores.reduce((prev, curr) => prev + curr));
    });
});