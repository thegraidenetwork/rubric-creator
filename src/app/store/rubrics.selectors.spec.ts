import { selectFilteredRubrics } from './rubrics.selectors';

fdescribe('Rubrics Selectors', () => {
    let state;

    beforeEach(() => {
        state = {
            rubrics: {
                currentRubric: undefined,
                allRubrics: undefined,
                error: undefined,
                saving: false,
                deleting: false,
                pageTitle: 'Rubric Creator by The Graide Network',
                connected: true,
                currentSearchTerm: '',
            },
        };
    });

    it('returns no rubrics when none match search term', () => {
        state.rubrics.currentSearchTerm = 'kiwi';
        state.rubrics.allRubrics = [
            {
                name: 'Test A',
            },
            {
                name: 'Test B',
            },
        ];

        const result = selectFilteredRubrics(state);

        void expect(result.length).toBeLessThan(1);
    });

    it('returns one rubric when one matches search term', () => {
        state.rubrics.currentSearchTerm = 'A';
        state.rubrics.allRubrics = [
            {
                name: 'Test A',
            },
            {
                name: 'Test B',
            },
        ];

        const result = selectFilteredRubrics(state);

        void expect(result[0].name).toEqual('Test A');
    });
});
