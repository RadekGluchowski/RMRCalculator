import { StepWizardChildProps } from "react-step-wizard";
import * as React from "react";

export const StepOne: React.FC<Partial<StepWizardChildProps>> = ({ ...props }) => {
    return (
        <div>
            <h2>Step {props.currentStep}</h2>
            <p><button onClick={props.nextStep}>Next Step</button></p>
        </div>
    )
}

