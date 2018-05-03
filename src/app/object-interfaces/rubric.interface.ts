import { ComponentInterface } from './component.interface';

export interface RubricInterface {
    components?: Array<ComponentInterface>;
    created_at?: string;
    description?: string;
    maxLevelsCount?: number;
    name: string;
    private?: boolean;
    uuid?: string;
}

export const emptyRubric: RubricInterface = {
    components: [
        {
            levels: [
                {
                    description: '',
                    score: 4,
                },
                {
                    description: '',
                    score: 3,
                },
                {
                    description: '',
                    score: 2,
                },
                {
                    description: '',
                    score: 1,
                },
            ],
            name: '',
        },
    ],
    created_at: new Date().toISOString(),
    description: '',
    name: '',
    private: true,
};
