import { createSelector } from "reselect"
import { carbsInGrams } from "../../Core/Calculations/carbCalculations";
import { fatInGrams, fatPercentOfTotalKcal } from "../../Core/Calculations/fatCalculations";
import { proteinsInGrams, proteinsPercentOfTotalKcal } from "../../Core/Calculations/proteinCalculations";
import { StepsUserData } from "../../Interfaces/stepOneUserData.interface";

import { AppState } from "../Reducers/rootReducer";

const selectSummaryCalculations = (state: AppState) => state.userData;

export const selectSummary = createSelector(
    selectSummaryCalculations,
    (state: StepsUserData) => Math.round(state.stepOneSummary + state.stepTwoSummary)
)

export const selectCarbsInGrams = createSelector(
    selectSummaryCalculations,
    (state: StepsUserData) => carbsInGrams(state.stepOneSummary + state.stepTwoSummary)
)

export const selectProteinsInGrams = createSelector(
    selectSummaryCalculations,
    (state: StepsUserData) => proteinsInGrams(state.stepOneUserData)
)

export const selectProteinsPercentOfTotalKcal = createSelector(
    selectSummaryCalculations,
    (state: StepsUserData) => proteinsPercentOfTotalKcal(state.stepOneSummary + state.stepTwoSummary, state.stepOneUserData)
)

export const selectFatPercentOfTotalKcal = createSelector(
    selectSummaryCalculations,
    (state: StepsUserData) => fatPercentOfTotalKcal(proteinsPercentOfTotalKcal(state.stepOneSummary + state.stepTwoSummary, state.stepOneUserData))
)

export const selectFatInGrams = createSelector(
    selectSummaryCalculations,
    (state: StepsUserData) => fatInGrams(state.stepOneSummary + state.stepTwoSummary, fatPercentOfTotalKcal(proteinsPercentOfTotalKcal(state.stepOneSummary + state.stepTwoSummary, state.stepOneUserData)))
)