import React, { useState, useCallback } from "react";
import { StepWizardChildProps } from "react-step-wizard";
import { Formik, Form, Field } from "formik";
import "./Step.css";
import { CustomInputField } from "../../Components/Inputs/CustomInputField/CustomInputField";
import { StepOneInterface } from "../../Interfaces/stepOneUserData.interface";
import { addStepOneUserData } from "../../Store/Actions/steps.actions";
import { useDispatch } from "react-redux";
import { StepOneForm, StepShared } from "./StepEnums";

export const StepOne: React.FC<Partial<StepWizardChildProps>> = ({ nextStep }) => {
    const [initialValues] = useState<StepOneInterface>({
        weight: 60,
        age: StepOneForm.AGE_YOUNG,
        sex: StepOneForm.SEX_MALE,
        personType: StepOneForm.PERSON_TYPE_LOW_ACTIVE_VALUE
    });

    const dispatch = useDispatch();

    const handleOnSubmit = useCallback(
        (values, actions) => {
            dispatch(addStepOneUserData(values));
            actions.setSubmitting(false);
        },
        [dispatch]
    );

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
                <Form className="step--form-container">
                    <div className="step--form-wrapper">
                        <Field
                            placeholder={StepOneForm.WEIGHT_FIELD_LABLE}
                            as={CustomInputField}
                            id={StepOneForm.WEIGHT_FIELD_ID}
                            name={StepOneForm.WEIGHT_FIELD_NAME}
                        />
                        <div className="step-one--select-field">
                            <label> {StepOneForm.AGE_FIELD_LABEL} </label>
                            <Field
                                placeholder={StepOneForm.AGE_FIELD_NAME}
                                as={StepShared.SELECT_FIELD_TYPE}
                                id={StepOneForm.AGE_FIELD_ID}
                                name={StepOneForm.AGE_FIELD_NAME}
                            >
                                <option
                                    value={StepOneForm.AGE_YOUNG}
                                    title={StepOneForm.AGE_YOUNG}
                                >
                                    {StepOneForm.AGE_YOUNG}
                                </option>
                                <option
                                    value={StepOneForm.AGE_MIDDLE}
                                    title={StepOneForm.AGE_MIDDLE}
                                >
                                    {StepOneForm.AGE_MIDDLE}
                                </option>
                                <option
                                    value={StepOneForm.AGE_OLD}
                                    title={StepOneForm.AGE_OLD}
                                >
                                    {StepOneForm.AGE_OLD}
                                </option>
                            </Field>
                        </div>
                        <div className="step-one--select-field">
                            <label> {StepOneForm.SEX_FIELD_LABEL} </label>
                            <Field
                                placeholder={StepOneForm.SEX_FIELD_NAME}
                                as={StepShared.SELECT_FIELD_TYPE}
                                id={StepOneForm.SEX_FIELD_ID}
                                name={StepOneForm.SEX_FIELD_NAME}
                            >
                                <option
                                    value={StepOneForm.SEX_MALE}
                                    title={StepOneForm.SEX_MALE}
                                >
                                    {StepOneForm.SEX_MALE}
                                </option>
                                <option
                                    value={StepOneForm.SEX_FEMALE}
                                    title={StepOneForm.SEX_FEMALE}
                                >
                                    {StepOneForm.SEX_FEMALE}
                                </option>
                            </Field>
                        </div>
                        <div className="step-one--select-field">
                            <label> {StepOneForm.PERSON_TYPE_FIELD_LABEL} </label>
                            <Field
                                className="test"
                                placeholder={StepOneForm.PERSON_TYPE_FIELD_NAME}
                                as={StepShared.SELECT_FIELD_TYPE}
                                id={StepOneForm.PERSON_TYPE_FIELD_ID}
                                name={StepOneForm.PERSON_TYPE_FIELD_NAME}
                            >
                                <option
                                    value={StepOneForm.PERSON_TYPE_LOW_ACTIVE_VALUE}
                                    title={StepOneForm.PERSON_TYPE_LOW_ACTIVE_NAME}
                                >
                                    {StepOneForm.PERSON_TYPE_LOW_ACTIVE_NAME}
                                </option>
                                <option
                                    value={StepOneForm.PERSON_TYPE_MEDIUM_ACTIVE_VALUE}
                                    title={StepOneForm.PERSON_TYPE_MEDIUM_ACTIVE_NAME}
                                >
                                    {StepOneForm.PERSON_TYPE_MEDIUM_ACTIVE_NAME}
                                </option>
                                <option
                                    value={StepOneForm.PERSON_TYPE_HIGHT_ACTIVE_VALUE}
                                    title={StepOneForm.PERSON_TYPE_HIGHT_ACTIVE_NAME}
                                >
                                    {StepOneForm.PERSON_TYPE_HIGHT_ACTIVE_NAME}
                                </option>
                            </Field>
                        </div>
                    </div>
                    <div className="step-one--button-container">
                        <button onClick={nextStep} type="submit">
                            {StepOneForm.NEXT_STEP_BTN_TEXT}
                        </button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}

export default StepOne;