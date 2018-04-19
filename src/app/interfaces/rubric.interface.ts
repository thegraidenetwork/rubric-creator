import { ComponentInterface } from './component.interface';

export interface RubricInterface {
    components?: Array<ComponentInterface>;
    description?: string;
    name: string;
    uuid: string;
}
