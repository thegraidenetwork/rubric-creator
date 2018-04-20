import { ComponentInterface } from './component.interface';

export interface RubricInterface {
    components?: Array<ComponentInterface>;
    description?: string;
    maxLevelsCount?: number;
    name: string;
    uuid: string;
}
