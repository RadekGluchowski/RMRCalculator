import React, { useState, useCallback } from "react";
import { StepWizardChildProps } from "react-step-wizard";
import { Formik, Form, Field } from "formik";
import '../Step.css'
import { CustomInputField } from "../../../Components/Inputs/CustomInputField/CustomInputField";
import { StepOneInterface } from "../../../Interfaces/stepOneUserData.interface";
import { addStepOneUserData } from "../../../Store/Actions/steps.actions";
import { useDispatch } from "react-redux";
import { StepOneForm, StepShared } from "../StepEnums";
import { PersonalData } from "../../../Core/PersonalData/PersonalData";

export const StepOne: React.FC<Partial<StepWizardChildProps>> = ({ nextStep }) => {
    const [initialValues] = useState<StepOneInterface>({
        weight: 60,
        age: PersonalData.AgeYoung.type,
        sex: PersonalData.SexMale,
        personType: PersonalData.PersonTypeLowActive.type
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
                                    value={PersonalData.AgeYoung.type}
                                    title={PersonalData.AgeYoung.type}
                                >
                                    {PersonalData.AgeYoung.type}
                                </option>
                                <option
                                    value={PersonalData.AgeMiddle.type}
                                    title={PersonalData.AgeMiddle.type}
                                >
                                    {PersonalData.AgeMiddle.type}
                                </option>
                                <option
                                    value={PersonalData.AgeOld.type}
                                    title={PersonalData.AgeOld.type}
                                >
                                    {PersonalData.AgeOld.type}
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
                                    value={PersonalData.SexMale}
                                    title={PersonalData.SexMale}
                                >
                                    {PersonalData.SexMale}
                                </option>
                                <option
                                    value={PersonalData.SexFemale}
                                    title={PersonalData.SexFemale}
                                >
                                    {PersonalData.SexFemale}
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
                                    value={PersonalData.PersonTypeLowActive.type}
                                    title={StepOneForm.PERSON_TYPE_LOW_ACTIVE_NAME}
                                >
                                    {StepOneForm.PERSON_TYPE_LOW_ACTIVE_NAME}
                                </option>
                                <option
                                    value={PersonalData.PersonTypeLowActive.type}
                                    title={StepOneForm.PERSON_TYPE_MEDIUM_ACTIVE_NAME}
                                >
                                    {StepOneForm.PERSON_TYPE_MEDIUM_ACTIVE_NAME}
                                </option>
                                <option
                                    value={PersonalData.PersonTypeHightActive.type}
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