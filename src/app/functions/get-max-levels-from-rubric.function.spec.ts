import * as faker from 'faker';
import { RubricInterface } from '../object-interfaces/rubric.interface';
import { getMaxLevelsFromRubric } from './get-max-levels-from-rubric.function';

describe('Function: getMaxLevelsFromRubric', () => {
    it('should count max levels in rubric', () => {
        const rubric: RubricInterface = {
            components: [
                {
                    levels: [
                        {score: faker.random.number()},
                        {score: faker.random.number()},
                        {score: faker.random.number()},
                    ],
                    name: faker.lorem.words(),
                },
                {
                    levels: [
                        {score: faker.random.number()},
                        {score: faker.random.number()},
                    ],
                    name: faker.lorem.words(),
                },
                {
                    levels: [
                        {score: faker.random.number()},
                    ],
                    name: faker.lorem.words(),
                },
            ],
            name: faker.lorem.words(),
        };

        const result = getMaxLevelsFromRubric(rubric);

        expect(result).toBe(3);
    });
});
