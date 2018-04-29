import { LevelInterface } from './level.interface';

export interface ComponentInterface {
    description?: string;
    levels: Array<LevelInterface>;
    name?: string;
}
