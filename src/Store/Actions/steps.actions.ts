import { StepOneInterface } from "../../Interfaces/stepOneUserData.interface";
import { StepTwoInterface } from "../../Interfaces/stepTwoUserData.interface";

export const ADD_STEP_ONE_USER_DATA = "ADD_STEP_ONE_USER_DATA";
export const ADD_STEP_TWO_USER_DATA = "ADD_STEP_TWO_USER_DATA";
export const CALCULATE_STEP_ONE_USER_DATA = "CALCULATE_STEP_ONE_USER_DATA";
export const CALCULATE_STEP_TWO_USER_DATA = "CALCULATE_STEP_TWO_USER_DATA";

type AddStepOneUserData = { type: typeof ADD_STEP_ONE_USER_DATA, payload: StepOneInterface }
type AddStepTwoUserData = { type: typeof ADD_STEP_TWO_USER_DATA, payload: StepTwoInterface }
type CalculateStepOneSummary = { type: typeof CALCULATE_STEP_ONE_USER_DATA, payload: {} }
type CalculateStepTwoSummary = { type: typeof CALCULATE_STEP_TWO_USER_DATA, payload: {} }

export const addStepOneUserData = (stepOneUserData: StepOneInterface): AddStepOneUserData => ({
    type: ADD_STEP_ONE_USER_DATA,
    payload: stepOneUserData
});

export const addStepTwoUserData = (stepTwoUserData: StepTwoInterface): AddStepTwoUserData => ({
    type: ADD_STEP_TWO_USER_DATA,
    payload: stepTwoUserData
})

export const calculateStepOneSummary = (stepOneSummaryUserData: {}): CalculateStepOneSummary => ({
    type: CALCULATE_STEP_ONE_USER_DATA,
    payload: stepOneSummaryUserData
})

export const calculateStepTwoSummary = (stepTwoSummaryUserData: {}): CalculateStepTwoSummary => ({
    type: CALCULATE_STEP_TWO_USER_DATA,
    payload: stepTwoSummaryUserData
})

export type StepsActions = AddStepOneUserData | AddStepTwoUserData | CalculateStepOneSummary | CalculateStepTwoSummary