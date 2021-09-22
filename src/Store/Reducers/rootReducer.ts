
import { combineReducers } from 'redux';
import { stepReducer } from './StepReducer/step.reducer';

export const rootReducer = combineReducers({
    userData: stepReducer
});

export type AppState = ReturnType<typeof rootReducer>;