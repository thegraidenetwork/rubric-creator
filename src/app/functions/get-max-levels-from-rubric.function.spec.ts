import * as faker from 'faker';
import { RubricInterface } from '../object-interfaces/rubric.interface';
import { getMaxLevelsFromRubric } from './get-max-levels-from-rubric.function';

fdescribe('Function: getMaxLevelsFromRubric', () => {
    fit('should count max levels in rubric', () => {
        // generate a random number between 1 - 20
        const randomNumber = () => Math.floor(Math.random() * 20) + 1;
        
        // generate an array that has a random number of objects
        const generateArray = () => new Array(randomNumber()).fill({});

        // generate an array with a random number of objects with score keys of random numbers
        const generateLevels = () => generateArray().map(() => {
            return { score: faker.random.number() }
        });

        // map over each component, filling in levels and names
        const components = generateArray().map(() => {
            return { levels: generateLevels(), name: faker.random.word() };
        });

        const rubric: RubricInterface = {
            components,
            name: faker.lorem.words(),
        };

        console.log(rubric);

        const result = getMaxLevelsFromRubric(rubric);

        expect(result).toBe(3);
    });
});
