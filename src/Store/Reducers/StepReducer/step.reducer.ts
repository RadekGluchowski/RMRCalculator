import { ADD_STEP_ONE_USER_DATA, StepsActions } from "../../Actions/steps.actions"
import produce, { Draft } from 'immer';
import { StepOneUserData } from "../../../Interfaces/stepOneUserData.interface";

const initialState = {
    stepOneUserData: {}
}

export const stepReducer = (state: StepOneUserData = initialState, action: StepsActions) => {
    return produce(state, (draft: Draft<StepOneUserData>) => {
        switch (action.type) {
            case ADD_STEP_ONE_USER_DATA:
                draft.stepOneUserData = action.payload;
                break;
            default:
                return draft;
        }
    })
}

