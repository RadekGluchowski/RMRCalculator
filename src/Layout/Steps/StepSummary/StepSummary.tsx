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
        <div className="summary--container">
            <table>
                <tr>
                    <th>Total kcal</th>
                    <th>Amount of carbs</th>
                    <th>Amount of proteins</th>
                    <th>Amount of fat</th>
                </tr>
                <tr>
                    <td><p> {summaryKcal}</p></td>
                    <td><p> {carbsInGrams} grams</p></td>
                    <td><p> {proteinsInGrams} grams </p></td>
                    <td><p> {fatInGrams} grams</p> </td>
                </tr>
                <tr>
                    <td></td>
                    <td><p>{carbsPercentOfTotalKcal} %</p></td>
                    <td><p>{proteinsPercentOfTotalKcal} %</p></td>
                    <td><p>{fatPercentOfTotalKcal} %</p></td>
                </tr>
            </table>
        </div>
    );
}

export default StepSummary;