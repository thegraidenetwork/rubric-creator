import { ComponentInterface } from './component.interface';

export interface RubricInterface {
    components?: Array<ComponentInterface>;
    created_at?: string;
    description?: string;
    maxLevelsCount?: number;
    name: string;
    private?: boolean;
    totalPoints?: number;
    uuid?: string;
}
