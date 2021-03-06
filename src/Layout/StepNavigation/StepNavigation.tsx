import React from "react";
import { StepWizardChildProps } from "react-step-wizard";
import "./StepNavigation.css"

enum StepNavigationStrings {
    STEP = "Step"
}

export const StepNavigation: React.FC<Partial<StepWizardChildProps>> = ({ totalSteps, currentStep }) => {

    if (typeof totalSteps === "number") {
        totalSteps -= 1;
    }

    return (
        <>
            <ol>
                {[...Array(totalSteps)].map((x, i) =>
                    <li key={i} className={currentStep === i + 1 ? "current" : ""}>{StepNavigationStrings.STEP} {i + 1}</li>
                )}
            </ol>
        </>
    );
}

export default StepNavigation;