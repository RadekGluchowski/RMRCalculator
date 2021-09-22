import { createSelector } from "reselect"
import { carbCalculations } from "../../Core/Calculations/carbCalculations";
import { proteinsInGrams, proteinsPercentOfTotalKcal } from "../../Core/Calculations/proteinCalculations";
import { StepsUserData } from "../../Interfaces/stepOneUserData.interface";

import { AppState } from "../Reducers/rootReducer";

const selectSummaryCalculations = (state: AppState) => state.userData;

export const selectSummary = createSelector(
    selectSummaryCalculations,
    (state: StepsUserData) => Math.round(state.stepOneSummary + state.stepTwoSummary)
)

export const selectSummaryCarbs = createSelector(
    selectSummaryCalculations,
    (state: StepsUserData) => carbCalculations(state.stepOneSummary + state.stepTwoSummary)
)

export const selectProteinsInGrams = createSelector(
    selectSummaryCalculations,
    (state: StepsUserData) => proteinsInGrams(state.stepOneUserData)
)

export const selectProteinsPercentOfTotalKcal = createSelector(
    selectSummaryCalculations,
    (state: StepsUserData) => proteinsPercentOfTotalKcal(state.stepOneSummary + state.stepTwoSummary, state.stepOneUserData)
)