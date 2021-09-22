import React from "react";
import { StepWizardChildProps } from "react-step-wizard";
import { useSelector } from "react-redux";
import { selectSummary, selectCarbsInGrams, selectProteinsInGrams, selectProteinsPercentOfTotalKcal, selectFatPercentOfTotalKcal, selectFatInGrams } from "../../../Store/Selectors/Selectors";
import { AppState } from "../../../Store/Reducers/rootReducer";


export const StepSummary: React.FC<Partial<StepWizardChildProps>> = ({ }) => {
    const summaryKcal = useSelector<AppState>(selectSummary);
    const proteinsInGrams = useSelector<AppState>(selectProteinsInGrams);
    const proteinsPercentOfTotalKcal = useSelector<AppState>(selectProteinsPercentOfTotalKcal)
    const fatPercentOfTotalKcal = useSelector<AppState>(selectFatPercentOfTotalKcal)
    const fatInGrams = useSelector<AppState>(selectFatInGrams)
    const carbsInGrams = useSelector<AppState>(selectCarbsInGrams);
    const carbsPercentOfTotalKcal = 60;

    return (
        <div>
            <div>
                <p>  {summaryKcal}</p>
            </div>
            <>
                <p>  {carbsInGrams}</p>
            </>
            <>
                <p>  {carbsPercentOfTotalKcal}</p>
            </>
            <>
                <p> {proteinsInGrams} </p>
            </>
            <>
                <p> {proteinsPercentOfTotalKcal} </p>
            </>

            <>
                <p> {fatPercentOfTotalKcal} </p>
            </>

            <>
                <p> {fatInGrams} </p>
            </>
        </div>
    );
}

export default StepSummary;