import { StepWizardChildProps } from "react-step-wizard";
import * as React from "react";
import "./Step.css"

export const StepOne: React.FC<Partial<StepWizardChildProps>> = ({ currentStep, nextStep }) => {
    return (
        <div className="step-container">
            <h2>Step {currentStep}</h2>
            <p><button onClick={nextStep}>Next Step</button></p>
        </div>
    )
}

