import { LevelInterface } from './level.interface';

export interface ComponentInterface {
    levels: Array<LevelInterface>;
    name: string;
    description: string;
}
