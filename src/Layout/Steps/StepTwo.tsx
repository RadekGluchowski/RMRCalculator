import React from "react";
import { StepWizardChildProps } from "react-step-wizard";

export const StepTwo: React.FC<Partial<StepWizardChildProps>> = ({ ...props }) => {

    return (
        <div className="step-container">
            <h2>Step {props.currentStep}</h2>
            <p><button onClick={props.previousStep}>Previous Step</button></p>
        </div>
    );
}

export default StepTwo;