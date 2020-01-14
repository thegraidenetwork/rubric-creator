import { DisplayableErrorInterface } from '../object-interfaces/displayable-error.interface';
import { RubricInterface } from '../object-interfaces/rubric.interface';
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
import { rubricsReducer } from './rubrics.reducer';
import { getInitialState, RubricsStateInterface } from './rubrics.state';
import * as faker from 'faker';

describe('RubricsReducer', () => {
    let initialState: RubricsStateInterface;
    let name: string;
    let rubric: RubricInterface;
    let currentRubric: RubricInterface;
    let allRubrics: Array<RubricInterface>;
    let error: DisplayableErrorInterface;

    beforeEach(() => {
        const state = getInitialState();
        initialState = state.rubrics;

        name = faker.lorem.words();
        rubric = { name };
        currentRubric = { maxLevelsCount: 0, name, totalPoints: 0 };

        allRubrics = [];
        error = { message: faker.lorem.words() };
    });

    describe('Undefined action', () => {
        it('should return the default state', () => {
            const action = { type: faker.lorem.words() } as any;

            const result = rubricsReducer(initialState, action);

            void expect(result).toBe(initialState);
        });
    });

    describe('GetRubricSuccess action', () => {
        it('should set currentRubric to rubric', () => {
            const action = new GetRubricSuccess(rubric);

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({
                ...initialState,
                currentRubric,
                error: undefined,
                saving: false,
            });
        });
    });

    describe('UpdateCurrentRubric action', () => {
        it('should set currentRubric to rubric', () => {
            const action = new UpdateCurrentRubric(rubric);

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({
                ...initialState,
                currentRubric,
                error: undefined,
                saving: false,
            });
        });
    });

    describe('CreateRubricSuccess action', () => {
        it('should set currentRubric to rubric', () => {
            const action = new CreateRubricSuccess(rubric);

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({
                ...initialState,
                currentRubric,
                error: undefined,
                saving: false,
            });
        });
    });

    describe('GetRubricsSuccess action', () => {
        it('should set allRubrics to array of rubrics', () => {
            const action = new GetRubricsSuccess(allRubrics);

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({
                ...initialState,
                allRubrics,
                deleting: false,
                error: undefined,
            });
        });
    });

    describe('DeleteRubricSuccess action', () => {
        it('should set deleting to false', () => {
            const action = new DeleteRubricSuccess(allRubrics);

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({
                ...initialState,
                allRubrics,
                deleting: false,
                error: undefined,
            });
        });
    });

    describe('CreateRubricError action', () => {
        it('should set an error message', () => {
            const action = new CreateRubricError(error);

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({
                ...initialState,
                error,
                allRubrics: [],
                currentRubric: undefined,
                deleting: false,
                saving: false,
            });
        });
    });

    describe('GetRubricError action', () => {
        it('should set an error message', () => {
            const action = new GetRubricError(error);

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({
                ...initialState,
                error,
                allRubrics: [],
                currentRubric: undefined,
                deleting: false,
                saving: false,
            });
        });
    });

    describe('GetRubricsError action', () => {
        it('should set an error message', () => {
            const action = new GetRubricsError(error);

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({
                ...initialState,
                error,
                allRubrics: [],
                currentRubric: undefined,
                deleting: false,
                saving: false,
            });
        });
    });

    describe('DeleteRubricError action', () => {
        it('should set an error message', () => {
            const action = new DeleteRubricError(error);

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({
                ...initialState,
                error,
                allRubrics: [],
                currentRubric: undefined,
                deleting: false,
                saving: false,
            });
        });
    });

    describe('DeleteRubric action', () => {
        it('should set deleting to true', () => {
            const action = new DeleteRubric();

            const result = rubricsReducer(initialState, action);

            void void expect(result).toEqual({
                ...initialState,
                currentRubric: undefined,
                deleting: true,
            });
        });
    });

    describe('GetRubric action', () => {
        it('should set currentRubric to undefined', () => {
            const action = new GetRubric('test');

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({ ...initialState, currentRubric: undefined });
        });
    });

    describe('SetPageTitle action', () => {
        it('should set pageTitle to title', () => {
            const pageTitle = faker.lorem.words();
            const action = new SetPageTitle(pageTitle);

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({ ...initialState, pageTitle });
        });
    });

    describe('CreateRubric action', () => {
        it('should set saving to true', () => {
            const action = new CreateRubric(rubric);

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({ ...initialState, saving: true });
        });
    });

    describe('ConnectionMade action', () => {
        it('should set connected to true', () => {
            const action = new ConnectionMade();

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({ ...initialState, connected: true });
        });
    });

    describe('ConnectionLost action', () => {
        it('should set connected to true', () => {
            const action = new ConnectionLost();

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual({ ...initialState, connected: false });
        });
    });

    describe('GetRubrics action', () => {
        it('should return the default state', () => {
            const action = new GetRubrics();

            const result = rubricsReducer(initialState, action);

            void expect(result).toEqual(initialState);
        });
    });
});
