import * as faker from 'faker';
import { RubricInterface } from '../object-interfaces/rubric.interface';
import { getMaxLevelsFromRubric } from './get-max-levels-from-rubric.function';

describe('Function: getMaxLevelsFromRubric', () => {
    it('should count max levels in rubric', () => {

    const maxLevels = faker.random.number({ min: 1, max: 20 });

    const generateComponents = (maxLevelsCount: number) => {
            const randomNumber = (max: number = 20) => faker.random.number({ min: 1, max });

            const generateArray = (maxElements?: number) => {
                let randomElements = randomNumber();
                if (maxElements !== undefined) {
                    randomElements = randomNumber(maxElements);
                }

                return new Array(randomElements).fill({});
            };

            const generateLevels = () => generateArray(maxLevelsCount).map(() => {
                return { score: faker.random.number() };
            });

            return generateArray().map(() => {
                return { levels: generateLevels(), name: faker.random.word() };
            });
        };

    const rubric: RubricInterface = {
            components: generateComponents(maxLevels),
            name: faker.lorem.words(),
        };

    const result = getMaxLevelsFromRubric(rubric);

    expect(result).toBeLessThanOrEqual(maxLevels);
    });

    it('should return zero if rubric components are undefined', () => {

        const rubric: RubricInterface = {
            components: undefined,
            name: faker.lorem.words(),
        };

        const result = getMaxLevelsFromRubric(rubric);

        expect(result).toEqual(0);
    });

    it('should return zero if rubric components are empty', () => {

        const rubric: RubricInterface = {
            components: [],
            name: faker.lorem.words(),
        };

        const result = getMaxLevelsFromRubric(rubric);

        expect(result).toEqual(0);
    });

});
