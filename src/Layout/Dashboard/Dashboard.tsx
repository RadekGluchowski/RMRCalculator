import React from "react";
import StepWizard from "react-step-wizard";
import { StepOne } from "../Steps/StepOne";
import StepTwo from "../Steps/StepTwo";
import './Dashboard.css'

const Dashboard: React.FC = () => {

    return (
        <div className="wizard-container">
            <StepWizard >
                <StepOne />
                <StepTwo />
            </StepWizard>
        </div>
    );
}

export default Dashboard;