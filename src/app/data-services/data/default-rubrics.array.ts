import { RubricInterface } from '../../object-interfaces/rubric.interface';

export const defaultRubricsArray: Array<RubricInterface> = [
    {
        created_at: '2018-09-07 21:49:55',
        description: 'State Standards-based Narrative essay rubric for grades 6-8. Created by The Graide Network.',
        name: 'Narrative Essay Rubric (Middle School)',
        uuid: '5bcf85a7baccb064c0b97866',
    },
    {
        created_at: '2018-09-12 20:58:26',
        description: 'State Standards-based Expository essay rubric for grades 6-8. Created by The Graide Network.',
        name: 'Expository Essay Rubric (Middle School)',
        uuid: '5bcf8666adf9f5652a63de22',
    },
    {
        created_at: '2018-09-12 21:26:02',
        description: 'State Standards-based Persuasive essay rubric for grades 6-8. Created by The Graide Network.',
        name: 'Persuasive Essay Rubric (Middle School)',
        uuid: '5bcf8683baccb064c0b978bd',
    },
    {
        created_at: '2018-09-12 20:28:42',
        description: 'State Standards-based Argumentative essay rubric for grades 6-8. Created by The Graide Network.',
        name: 'Argumentative Essay Rubric (Middle School)',
        uuid: '5bcf869ebaccb064c0b978c5',
    },
    {
        created_at: '2018-08-07 16:00:47',
        description: 'State Standards-based Expository essay rubric for grades 9-12. Created by The Graide Network.',
        name: 'Expository Essay Rubric (High School)',
        uuid: '5bcf86b5baccb064c0b978d1',
    },
    {
        created_at: '2018-08-07 15:55:24',
        description: 'State Standards-based Argumentative essay rubric for grades 9-12. Created by The Graide Network.',
        name: 'Argumentative Essay Rubric (High School)',
        uuid: '5bcf86cbadf9f5652a63de49',
    },
    {
        created_at: '2018-08-07 16:59:23',
        description: 'State Standards-based history essay rubric for grades 9-12. Created by The Graide Network.',
        name: 'History Essay Rubric (High School)',
        uuid: '5bcf86de716f9364f8c9c14a',
    },
    {
        created_at: '2018-08-07 16:29:42',
        description: 'State Standards-based narrative essay rubric for grades 9-12. Created by The Graide Network.',
        name: 'Narrative Essay Rubric (High School)',
        uuid: '5bcf86f6716f9364f8c9c158',
    },
    {
        created_at: '2018-08-07 16:17:15',
        description: 'State Standards-based persuasive essay rubric for grades 9-12. Created by The Graide Network.',
        name: 'Persuasive Essay Rubric (High School)',
        uuid: '5bcf872eadf9f5652a63de70',
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
