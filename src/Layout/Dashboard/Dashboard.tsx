import React from "react";
import StepWizard from "react-step-wizard";
import StepNavigation from "../StepNavigation/StepNavigation";
import StepOne from "../Steps/StepOne/StepOne";
import StepTwo from "../Steps/StepTwo/StepTwo";
import StepSummary from "../Steps/StepSummary/StepSummary";
import './Dashboard.css'

const Dashboard: React.FC = () => {

    return (
        <div className="wizard-container">
            <StepWizard nav={<StepNavigation />}>
                <StepOne />
                <StepTwo />
                <StepSummary />
            </StepWizard>
        </div>
    );
}

export default Dashboard;