import { RubricInterface } from '../../object-interfaces/rubric.interface';

export const defaultRubricsArray: Array<RubricInterface> = [
    {
        created_at: '2018-08-07 16:59:23',
        description: 'Common Core State Standards-based history essay rubric for grades 9-12. Created by The Graide Network.',
        name: 'History Essay Rubric (High School)',
        uuid: '5b719172e013915146d41141',
    },
    {
        created_at: '2018-08-07 16:29:42',
        description: 'Common Core State Standards-based narrative essay rubric for grades 9-12. Created by The Graide Network.',
        name: 'Narrative Essay Rubric (High School)',
        uuid: '5b7192472878011e8d6a70a3',
    },
    {
        created_at: '2018-08-07 16:17:15',
        description: 'Common Core State Standards-based persuasive essay rubric for grades 9-12. Created by The Graide Network.',
        name: 'Persuasive Essay Rubric (High School)',
        uuid: '5b7192ae7b212953679045d0',
    },
    {
        created_at: '2018-08-07 16:00:47',
        description: 'Common Core State Standards-based expository essay rubric for grades 9-12. Created by The Graide Network.',
        name: 'Expository Essay Rubric (High School)',
        uuid: '5b7192d8e013915146d411a5',
    },
    {
        created_at: '2018-08-07 15:55:24',
        description: 'Common Core State Standards-based argumentative essay rubric for grades 9-12. Created by The Graide Network.',
        name: 'Argumentative Essay Rubric (High School)',
        uuid: '5b7192f6e013915146d411a8',
    },
];

export const defaultRubricIds = defaultRubricsArray.reduce(
    (arr: Array<string>, def: RubricInterface) => {
        if (def.uuid !== undefined) {
            arr.push(def.uuid);
        }

        return arr;
    },
    []
);
