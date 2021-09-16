import React from "react";
import { StepWizardChildProps } from "react-step-wizard";
import "./StepNavigation.css"

enum StepNavigationStrings {
    STEP = "Step"
}

export const StepNavigation: React.FC<Partial<StepWizardChildProps>> = ({ totalSteps, currentStep, goToStep }) => {
    const handleNavigation = (stepNumber: number) => {
        if (goToStep) {
            goToStep(stepNumber + 1)
        }
    }
    return (
        <div className="nav-dot-container">
            <ol>
                {[...Array(totalSteps)].map((x, i) =>
                    <li key={i} onClick={() => handleNavigation(i)} className={currentStep === i + 1 ? "current" : ""}>{StepNavigationStrings.STEP} {i + 1}</li>
                )}
            </ol>
        </div>
    );
}

export default StepNavigation;