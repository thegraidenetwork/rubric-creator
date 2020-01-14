import { selectFilteredRubrics } from './rubrics.selectors';
import { getInitialState, RubricsStateInterface } from './rubrics.state';

describe('Rubric Selectors', (): void => {
    let state: { rubrics: RubricsStateInterface } = getInitialState();

    beforeEach((): void => {
        state = getInitialState();
        state.rubrics.allRubrics = [
            {
                description: 'My description',
                name: 'Rubric One',
            },
            {
                description: 'My other description',
                name: 'Rubric Two',
            },
            {
                description: 'My description for this one',
                name: 'Number Three',
            },
        ];
    });

    it('returns all rubrics when no filter is applied', (): void => {
        const filteredRubrics = selectFilteredRubrics(state);

        void expect(filteredRubrics).toEqual(state.rubrics.allRubrics);
    });

    it('returns filtered rubrics when a filter is applied', (): void => {
        state.rubrics.listFilter = 'Rubric';

        const filteredRubrics = selectFilteredRubrics(state);

        void expect(filteredRubrics).toEqual([
            state.rubrics.allRubrics[0],
            state.rubrics.allRubrics[1],
        ]);
    });

    it('returns filtered rubrics without case sensitivity', (): void => {
        state.rubrics.listFilter = 'rubric';

        const filteredRubrics = selectFilteredRubrics(state);

        void expect(filteredRubrics).toEqual([
            state.rubrics.allRubrics[0],
            state.rubrics.allRubrics[1],
        ]);
    });

    it('returns filtered rubrics matching the description or name', (): void => {
        state.rubrics.listFilter = 'one';

        const filteredRubrics = selectFilteredRubrics(state);

        void expect(filteredRubrics).toEqual([
            state.rubrics.allRubrics[0],
            state.rubrics.allRubrics[2],
        ]);
    });
});
