import { rubricsReducer } from './rubrics.reducer';
import {
  ConnectionLost,
  ConnectionMade,
  CreateRubric,
  CreateRubricError,
  CreateRubricSuccess,
  DeleteRubric,
  DeleteRubricError,
  DeleteRubricSuccess,
  GetRubric,
  GetRubricError,
  GetRubrics,
  GetRubricsError,
  GetRubricsSuccess,
  GetRubricSuccess,
  SetPageTitle,
  UpdateCurrentRubric,
} from './rubrics.actions';
import { getInitialState } from './rubrics.state';

fdescribe('RubricsReducer', () => {
  describe('GetRubric action', () => {
    it('should set currentRubric to undefined', () => {
      const { rubrics: initialState } = getInitialState();
      const action = new GetRubric('test');

      const state = rubricsReducer(initialState, action);

      void expect(state.currentRubric).toEqual(undefined);
    });
  });

  describe('GetRubricSuccess action', () => {
    it('should set currentRubric to the correct rubric', () => {
      const { rubrics: initialState } = getInitialState();
      const rubric = { maxLevelsCount: 0, name: 'test', totalPoints: 0 };
      const action = new GetRubricSuccess(rubric);

      const state = rubricsReducer(initialState, action);

      void expect(state.currentRubric).toEqual(rubric);
    });
  });

  describe('GetRubricError action', () => {
    it('should set an error message', () => {
      const { rubrics: initialState } = getInitialState();
      const error = { message: 'test' };
      const action = new GetRubricError(error);

      const state = rubricsReducer(initialState, action);

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
      const action = new GetRubrics();

      const state = rubricsReducer(initialState, action);

      void expect(state).toEqual(initialState);
    });
  });

  describe('GetRubricsSuccess action', () => {
    it('should set allRubrics to an array of rubrics', () => {
      const { rubrics: initialState } = getInitialState();
      const rubrics = [];
      const action = new GetRubricsSuccess(rubrics);

      const state = rubricsReducer(initialState, action);

      void expect(state.allRubrics).toEqual(rubrics);
      void expect(state.error).toEqual(undefined);
    });
  });

  describe('GetRubricsError action', () => {
    it('should set an error message', () => {
      const { rubrics: initialState } = getInitialState();
      const error = { message: 'test' };
      const action = new GetRubricsError(error);

      const state = rubricsReducer(initialState, action);

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
      const action = new DeleteRubric();

      const state = rubricsReducer(initialState, action);

      void expect(state.currentRubric).toEqual(undefined);
      void expect(state.deleting).toEqual(true);
    });
  });

  describe('DeleteRubricSuccess action', () => {
    it('should set deleting to true', () => {
      const { rubrics: initialState } = getInitialState();
      const rubrics = [];
      const action = new DeleteRubricSuccess(rubrics);

      const state = rubricsReducer(initialState, action);

      void expect(state.allRubrics).toEqual(rubrics);
      void expect(state.error).toEqual(undefined);
      void expect(state.deleting).toEqual(false);
    });
  });

  describe('DeleteRubricError action', () => {
    it('should set an error message', () => {
      const { rubrics: initialState } = getInitialState();
      const error = { message: 'test' };
      const action = new DeleteRubricError(error);

      const state = rubricsReducer(initialState, action);

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
      const rubric = { maxLevelsCount: 0, name: 'test', totalPoints: 0 };
      const action = new UpdateCurrentRubric(rubric);

      const state = rubricsReducer(initialState, action);

      void expect(state.currentRubric).toEqual(rubric);
      void expect(state.error).toEqual(undefined);
      void expect(state.saving).toEqual(false);
    });
  });

  describe('CreateRubric action', () => {
    it('should set saving to true', () => {
      const { rubrics: initialState } = getInitialState();
      const rubric = { maxLevelsCount: 0, name: 'test', totalPoints: 0 };
      const action = new CreateRubric(rubric);

      const state = rubricsReducer(initialState, action);

      void expect(state.saving).toEqual(true);
    });
  });

  describe('CreateRubricSuccess action', () => {
    it('should set currentRubric to the correct rubric', () => {
      const { rubrics: initialState } = getInitialState();
      const rubric = { maxLevelsCount: 0, name: 'test', totalPoints: 0 };
      const action = new CreateRubricSuccess(rubric);

      const state = rubricsReducer(initialState, action);

      void expect(state.currentRubric).toEqual(rubric);
      void expect(state.error).toEqual(undefined);
      void expect(state.saving).toEqual(false);
    });
  });

  describe('CreateRubricError action', () => {
    it('should set an error message', () => {
      const { rubrics: initialState } = getInitialState();
      const error = { message: 'test' };
      const action = new CreateRubricError(error);

      const state = rubricsReducer(initialState, action);

      void expect(state.currentRubric).toEqual(undefined);
      void expect(state.allRubrics).toEqual(undefined);
      void expect(state.error).toEqual(error);
      void expect(state.saving).toEqual(false);
      void expect(state.deleting).toEqual(false);
    });
  });

  describe('SetPageTitle action', () => {
    it('should set the pageTitle to the correct title', () => {
      const { rubrics: initialState } = getInitialState();
      const title = 'test';
      const action = new SetPageTitle(title);

      const state = rubricsReducer(initialState, action);

      void expect(state.pageTitle).toEqual(title);
    });
  });

  describe('ConnectionMade action', () => {
    it('should set connected to true', () => {
      const { rubrics: initialState } = getInitialState();
      const action = new ConnectionMade();

      const state = rubricsReducer(initialState, action);

      void expect(state.connected).toEqual(true);
    });
  });

  describe('ConnectionLost action', () => {
    it('should set connected to true', () => {
      const { rubrics: initialState } = getInitialState();
      const action = new ConnectionLost();

      const state = rubricsReducer(initialState, action);

      void expect(state.connected).toEqual(false);
    });
  });
});
