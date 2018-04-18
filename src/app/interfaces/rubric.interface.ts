import { ComponentInterface } from './component.interface';

export interface RubricInterface {
    components: Array<ComponentInterface>;
    description: string;
    levels_count: number;
    name: string;
    uuid: string;
}
