import { StepOneInterface } from "../../Interfaces/stepOneUserData.interface";

export const ADD_STEP_ONE_USER_DATA = "ADD_STEP_ONE_USER_DATA"

type AddStepOneUserData = { type: typeof ADD_STEP_ONE_USER_DATA, payload: StepOneInterface }

export const addStepOneUserData = (stepOneUserData: StepOneInterface): AddStepOneUserData => ({
    type: ADD_STEP_ONE_USER_DATA,
    payload: stepOneUserData
});

export type StepsActions = AddStepOneUserData