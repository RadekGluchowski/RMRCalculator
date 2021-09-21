import React, { useState, useCallback } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { StepWizardChildProps } from "react-step-wizard";
import { StepTwoInterface } from "../../../Interfaces/stepTwoUserData.interface";
import { useDispatch } from "react-redux";
import "../Step.css";
import { CustomInputField } from "../../../Components/Inputs/CustomInputField/CustomInputField";
import { StepShared, StepTwoForm } from "../StepEnums";
import { addStepTwoUserData } from "../../../Store/Actions/steps.actions";
import { ActivitiesData } from "../../../Core/ActivitiesData/ActivitesData";

export const StepTwo: React.FC<Partial<StepWizardChildProps>> = ({ previousStep, nextStep }) => {
    const [initialValues] = useState<StepTwoInterface>({
        activities: [{
            activityType: "Aerobics (intensive)",
            activityAmount: 2
        }]
    });

    const dispatch = useDispatch();

    const handleOnSubmit = useCallback(
        (values, actions) => {
            dispatch(addStepTwoUserData(values));
            actions.setSubmitting(false);
        },
        [dispatch]
    );

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
                {({ values }) => (
                    <Form className="step--form-container" >
                        <div className="step--form-wrapper">
                            <FieldArray name="activities">
                                {({ push, remove }) => (
                                    <>
                                        {values.activities.map((_, index) => (
                                            <div key={index} className="step-two--row-container">
                                                <div className="step-two--select-field">
                                                    <label> {StepTwoForm.ACTIVITY_TYPE} </label>
                                                    <Field
                                                        as={StepShared.SELECT_FIELD_TYPE}
                                                        id={StepTwoForm.ACTIVITY_TYPE_ID}
                                                        name={`activities[${index}].activityType`}
                                                    >
                                                        {Object.entries(ActivitiesData).map(key => <option key={key[1].name} value={key[1].name} title={key[1].name} >{key[1].name}</option>)}
                                                    </Field>
                                                </div>
                                                <Field
                                                    placeholder={StepTwoForm.TIME_FIELD}
                                                    as={CustomInputField}
                                                    id={StepTwoForm.TIME_FIELD}
                                                    name={`activities[${index}].activityAmount`}
                                                />
                                                <div className="remove-btn--container">
                                                    <button onClick={() => remove(index)}>
                                                        {StepTwoForm.DELETE_BTN_NAME}
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                        {values.activities.length < 5 ?
                                            <button onClick={() => push({ activityType: "", activityAmount: 0 })} >
                                                {StepTwoForm.ADD_MORE_ACTIVITIES_BTN_NAME}
                                            </button>
                                            : null
                                        }
                                    </>
                                )}
                            </FieldArray>
                        </div>
                        <div className="step-two--button-container">
                            <button onClick={previousStep} >
                                {StepTwoForm.PREVIOUS_STEP_BTN_TEXT}
                            </button>
                            <button onClick={nextStep} type="submit">
                                {StepTwoForm.CALCULATE_BTN_NAME}
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
        </>
    );
}

export default StepTwo;