import React from "react";
import { StepWizardChildProps } from "react-step-wizard";
import { useSelector } from "react-redux";
import { selectSummary, selectSummaryCarbs, selectProteinsInGrams, selectProteinsPercentOfTotalKcal } from "../../../Store/Selectors/Selectors";
import { AppState } from "../../../Store/Reducers/rootReducer";


export const StepSummary: React.FC<Partial<StepWizardChildProps>> = ({ }) => {
    const summaryKcal = useSelector<AppState>(selectSummary);
    const carbs = useSelector<AppState>(selectSummaryCarbs);
    const proteinsInGrams = useSelector<AppState>(selectProteinsInGrams);
    const proteinsPercentOfTotalKcal = useSelector<AppState>(selectProteinsPercentOfTotalKcal)

    return (
        <div>
            <div>
                <p>  {summaryKcal}</p>
            </div>
            <>
                <p>  {carbs}</p>
            </>
            <>
                <p> {proteinsInGrams} </p>
            </>
            <>
                <p> {proteinsPercentOfTotalKcal} </p>
            </>
        </div>
    );
}

export default StepSummary;