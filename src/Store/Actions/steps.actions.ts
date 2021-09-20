import { StepOneInterface } from "../../Interfaces/stepOneUserData.interface";
import { StepTwoInterface } from "../../Interfaces/stepTwoUserData.interface";

export const ADD_STEP_ONE_USER_DATA = "ADD_STEP_ONE_USER_DATA";
export const ADD_STEP_TWO_USER_DATA = "ADD_STEP_TWO_USER_DATA";

type AddStepOneUserData = { type: typeof ADD_STEP_ONE_USER_DATA, payload: StepOneInterface }
type AddStepTwoUserData = { type: typeof ADD_STEP_TWO_USER_DATA, payload: StepTwoInterface }

export const addStepOneUserData = (stepOneUserData: StepOneInterface): AddStepOneUserData => ({
    type: ADD_STEP_ONE_USER_DATA,
    payload: stepOneUserData
});

export const addStepTwoUserData = (stepTwoUserData: StepTwoInterface): AddStepTwoUserData => ({
    type: ADD_STEP_TWO_USER_DATA,
    payload: stepTwoUserData
})

export type StepsActions = AddStepOneUserData | AddStepTwoUserData