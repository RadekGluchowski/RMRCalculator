import { ADD_STEP_ONE_USER_DATA, ADD_STEP_TWO_USER_DATA, CALCULATE_STEP_ONE_USER_DATA, CALCULATE_STEP_TWO_USER_DATA, StepsActions } from "../../Actions/steps.actions"
import produce, { Draft } from 'immer';
import { StepsUserData } from "../../../Interfaces/stepOneUserData.interface";
import { PersonalData } from "../../../Core/PersonalData/PersonalData";

const initialState = {
    stepOneUserData: {
        weight: 60,
        age: PersonalData.AgeYoung.type,
        sex: PersonalData.SexMale,
        personType: PersonalData.PersonTypeLowActive.type
    },
    stepTwoUserData: {},
    stepOneSummary: 0,
    stepTwoSummary: 0,
}

export const stepReducer = (state: StepsUserData = initialState, action: StepsActions) => {
    return produce(state, (draft: Draft<StepsUserData>) => {
        switch (action.type) {
            case ADD_STEP_ONE_USER_DATA:
                draft.stepOneUserData = action.payload;
                break;
            case ADD_STEP_TWO_USER_DATA:
                draft.stepTwoUserData = action.payload;
                break;
            case CALCULATE_STEP_ONE_USER_DATA:
                draft.stepOneSummary = action.payload;
                break;
            case CALCULATE_STEP_TWO_USER_DATA:
                draft.stepTwoSummary = action.payload;
                break;
            default:
                return draft;
        }
    })
}

