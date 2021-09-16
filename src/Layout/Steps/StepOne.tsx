import React, { useState, useCallback } from "react";
import { StepWizardChildProps } from "react-step-wizard";
import { Formik, Form, Field } from "formik";
import "./Step.css";
import { NumberInput } from "../../Components/Inputs/NumberInput/NumberInput";

interface StepOneInterface {
    weight: number;
    age: number;
    sex: string;
    personType: string;
}

enum StepOneForm {
    STEP = "Step",
    SELECT_FIELD_TYPE = "select",
    WEIGHT_FIELD_ID = "weight",
    WEIGHT_FIELD_NAME = "weight",
    AGE_FIELD_ID = "age",
    AGE_FIELD_NAME = "age",
    AGE_YOUNG = "10 - 18",
    AGE_MIDDLE = "18 - 30",
    AGE_OLD = "31 - 60+",
    SEX_FIELD_ID = "sex",
    SEX_FIELD_NAME = "sex",
    PERSON_TYPE_FIELD_ID = "personType",
    PERSON_TYPE_FIELD_NAME = "personType",
    PERSON_TYPE_FIELD_LABEL = "Type of person",
    NEXT_STEP_BTN_TEXT = "Next Step",
    SEX_MALE = "Male",
    SEX_FEMALE = "Female",
    PERSON_TYPE_LOW_ACTIVE_NAME = "Low Active",
    PERSON_TYPE_LOW_ACTIVE_VALUE = "lowActive",
    PERSON_TYPE_MEDIUM_ACTIVE_NAME = "Medium Active",
    PERSON_TYPE_MEDIUM_ACTIVE_VALUE = "mediumActive",
    PERSON_TYPE_HIGHT_ACTIVE_NAME = "Hight Active",
    PERSON_TYPE_HIGHT_ACTIVE_VALUE = "hightActive"
}


export const StepOne: React.FC<Partial<StepWizardChildProps>> = ({ currentStep, nextStep }) => {
    const [initialValues] = useState<StepOneInterface>({
        weight: 60,
        age: 18,
        sex: "male",
        personType: "active"
    });

    const handleOnSubmit = useCallback(
        (values, actions) => {
            console.log(values)
            //  saveFirstStep(values); 
            actions.setSubmitting(false);
        },
        []
    );

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
                <Form className="step-one--form-container">
                    <div className="step-one--form-wrapper">
                        <Field
                            placeholder={StepOneForm.WEIGHT_FIELD_NAME}
                            as={NumberInput}
                            id={StepOneForm.WEIGHT_FIELD_ID}
                            name={StepOneForm.WEIGHT_FIELD_NAME}
                        />
                        <div className="step-one--select-field">
                            <label> {StepOneForm.AGE_FIELD_NAME} </label>
                            <Field
                                placeholder={StepOneForm.AGE_FIELD_NAME}
                                as={StepOneForm.SELECT_FIELD_TYPE}
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
                            <label> {StepOneForm.SEX_FIELD_NAME} </label>
                            <Field
                                placeholder={StepOneForm.SEX_FIELD_NAME}
                                as={StepOneForm.SELECT_FIELD_TYPE}
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
                                as={StepOneForm.SELECT_FIELD_TYPE}
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