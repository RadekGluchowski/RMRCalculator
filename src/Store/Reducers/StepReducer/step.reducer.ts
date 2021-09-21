import { ADD_STEP_ONE_USER_DATA, ADD_STEP_TWO_USER_DATA, CALCULATE_STEP_ONE_USER_DATA, CALCULATE_STEP_TWO_USER_DATA, StepsActions } from "../../Actions/steps.actions"
import produce, { Draft } from 'immer';
import { StepsUserData } from "../../../Interfaces/stepOneUserData.interface";

const initialState = {
    stepOneUserData: {},
    stepTwoUserData: {},
    stepOneSummary: 0,
    stepTwoSummary: 0,
}

export const stepReducer = (state: StepsUserData = initialState, action: StepsActions) => {
    return produce(state, (draft: Draft<StepsUserData>) => {
        switch (action.type) {
            case ADD_STEP_ONE_USER_DATA:
                console.log()
                draft.stepOneUserData = action.payload;
                break;
            case ADD_STEP_TWO_USER_DATA:
                draft.stepTwoUserData = action.payload;
                break;
            case CALCULATE_STEP_ONE_USER_DATA:
                draft.stepOneSummary = action.payload;
                break;
            case CALCULATE_STEP_TWO_USER_DATA:
                console.log(action.payload)
                draft.stepTwoSummary = action.payload;
                break;
            default:
                return draft;
        }
    })
}

