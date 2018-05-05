import * as faker from 'faker';
import { cloneComponentObject } from './clone-component-object.function';
import { ComponentInterface } from '../object-interfaces/component.interface';

describe('Function: cloneComponentObject', () => {
    it('should clone component with new levels', () => {
        const component: ComponentInterface = {
            levels: [
                {score: faker.random.number()},
                {score: faker.random.number()},
                {score: faker.random.number()},
            ],
            name: faker.lorem.words(),
        };

        const result = cloneComponentObject(component);

        expect(result).not.toBe(component);
        expect(result).toEqual(component);
    });
});
