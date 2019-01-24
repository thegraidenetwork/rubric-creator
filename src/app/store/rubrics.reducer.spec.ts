import * as fromRubrics from './rubrics.reducer';
import * as fromActions from './rubrics.actions';
import { getInitialState } from './rubrics.state';

describe('RubricsReducer', () => {
  describe('Initial state', () => {
    it('should return the default state', () => {
      const { rubrics: initialState } = getInitialState();
      const { GetRubrics } = fromActions;
      const action = new GetRubrics();

      const state = fromRubrics.rubricsReducer(initialState, action);

      expect(state).toEqual(initialState);
    });
  });
});
