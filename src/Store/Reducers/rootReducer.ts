
import { combineReducers } from 'redux';
import { stepReducer } from './StepReducer/step.reducer';

export const rootReducer = combineReducers({
    stepOneUserData: stepReducer
});

export type AppState = ReturnType<typeof rootReducer>;