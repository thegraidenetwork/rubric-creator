import * as fromRubrics from './rubrics.reducer';
import * as fromActions from './rubrics.actions';
import { getInitialState } from './rubrics.state';

fdescribe('RubricsReducer', () => {
  describe('Initial state', () => {
    it('should return the default state', () => {
      const { rubrics: initialState } = getInitialState();
      const { GetRubrics } = fromActions;
      const action = new GetRubrics();

      const state = fromRubrics.rubricsReducer(initialState, action);

      void expect(state).toEqual(initialState);
    });
  });

  describe('GetRubric action', () => {
    it('should set currentRubric to undefined', () => {
      const { rubrics: initialState } = getInitialState();
      const { GetRubric } = fromActions;
      const action = new GetRubric('test');

      const state = fromRubrics.rubricsReducer(initialState, action);

      void expect(state.currentRubric).toEqual(undefined);
    });
  });

  describe('GetRubricSuccess action', () => {
    it('should set currentRubric to the correct rubric', () => {
      const { rubrics: initialState } = getInitialState();
      const { GetRubricSuccess } = fromActions;
      const rubric = {
        maxLevelsCount: 0,
        name: 'test',
        totalPoints: 0,
      };
      const action = new GetRubricSuccess(rubric);

      const state = fromRubrics.rubricsReducer(initialState, action);

      void expect(state.currentRubric).toEqual(rubric);
    });
  });

  describe('GetRubricError action', () => {
    it('should set an error message', () => {
      const { rubrics: initialState } = getInitialState();
      const { GetRubricError } = fromActions;
      const error = { message: 'test' };
      const action = new GetRubricError(error);

      const state = fromRubrics.rubricsReducer(initialState, action);

      void expect(state.currentRubric).toEqual(undefined);
      void expect(state.allRubrics).toEqual(undefined);
      void expect(state.error).toEqual(error);
      void expect(state.saving).toEqual(false);
      void expect(state.deleting).toEqual(false);
    });
  });

  describe('GetRubrics action', () => {
    it('should return the default state', () => {
      const { rubrics: initialState } = getInitialState();
      const { GetRubrics } = fromActions;
      const action = new GetRubrics();

      const state = fromRubrics.rubricsReducer(initialState, action);

      void expect(state).toEqual(initialState);
    });
  });

  describe('GetRubricsSuccess action', () => {
    it('should set allRubrics to an array of rubrics', () => {
      const { rubrics: initialState } = getInitialState();
      const { GetRubricsSuccess } = fromActions;
      const rubrics = [];
      const action = new GetRubricsSuccess(rubrics);

      const state = fromRubrics.rubricsReducer(initialState, action);

      void expect(state.allRubrics).toEqual(rubrics);
      void expect(state.error).toEqual(undefined);
    });
  });

  describe('GetRubricsError action', () => {
    it('should set an error message', () => {
      const { rubrics: initialState } = getInitialState();
      const { GetRubricsError } = fromActions;
      const error = { message: 'test' };
      const action = new GetRubricsError(error);

      const state = fromRubrics.rubricsReducer(initialState, action);

      void expect(state.currentRubric).toEqual(undefined);
      void expect(state.allRubrics).toEqual(undefined);
      void expect(state.error).toEqual(error);
      void expect(state.saving).toEqual(false);
      void expect(state.deleting).toEqual(false);
    });
  });

  describe('DeleteRubric action', () => {
    it('should set deleting to true', () => {
      const { rubrics: initialState } = getInitialState();
      const { DeleteRubric } = fromActions;
      const action = new DeleteRubric();

      const state = fromRubrics.rubricsReducer(initialState, action);

      void expect(state.currentRubric).toEqual(undefined);
      void expect(state.deleting).toEqual(true);
    });
  });

  describe('DeleteRubricSuccess action', () => {
    it('should set deleting to true', () => {
      const { rubrics: initialState } = getInitialState();
      const { DeleteRubricSuccess } = fromActions;
      const rubrics = [];
      const action = new DeleteRubricSuccess(rubrics);

      const state = fromRubrics.rubricsReducer(initialState, action);

      void expect(state.allRubrics).toEqual(rubrics);
      void expect(state.error).toEqual(undefined);
      void expect(state.deleting).toEqual(false);
    });
  });

  describe('DeleteRubricError action', () => {
    it('should set an error message', () => {
      const { rubrics: initialState } = getInitialState();
      const { DeleteRubricError } = fromActions;
      const error = { message: 'test' };
      const action = new DeleteRubricError(error);

      const state = fromRubrics.rubricsReducer(initialState, action);

      void expect(state.currentRubric).toEqual(undefined);
      void expect(state.allRubrics).toEqual(undefined);
      void expect(state.error).toEqual(error);
      void expect(state.saving).toEqual(false);
      void expect(state.deleting).toEqual(false);
    });
  });

  describe('UpdateCurrentRubric action', () => {
    it('should set currentRubric to the correct rubric', () => {
      const { rubrics: initialState } = getInitialState();
      const { UpdateCurrentRubric } = fromActions;
      const rubric = {
        maxLevelsCount: 0,
        name: 'test',
        totalPoints: 0,
      };
      const action = new UpdateCurrentRubric(rubric);

      const state = fromRubrics.rubricsReducer(initialState, action);

      void expect(state.currentRubric).toEqual(rubric);
      void expect(state.error).toEqual(undefined);
      void expect(state.saving).toEqual(false);
    });
  });
});
