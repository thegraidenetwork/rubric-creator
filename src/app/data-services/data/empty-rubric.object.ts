import { RubricInterface } from '../../object-interfaces/rubric.interface';
import { emptyComponentObject } from './empty-component.object';

export const emptyRubricObject: RubricInterface = {
    components: [emptyComponentObject],
    created_at: new Date().toISOString(),
    description: '',
    name: '',
    private: true,
};
