import { RubricInterface } from '../../object-interfaces/rubric.interface';

export const emptyRubricObject: RubricInterface = {
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
