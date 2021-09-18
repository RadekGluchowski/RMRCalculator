import React, { useState, useCallback } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { StepWizardChildProps } from "react-step-wizard";
import { StepTwoInterface } from "../../Interfaces/stepTwoUserData.interface";
import { useDispatch } from "react-redux";
import "./Step.css";
import { NumberInput } from "../../Components/Inputs/NumberInput/CustomInputField";

enum StepTwoForm {
    PREVIOUS_STEP_BTN_TEXT = "Previous Step"
}

enum StepOneForm {
    STEP = "Step",
    SELECT_FIELD_TYPE = "select",
    WEIGHT_FIELD_LABLE = "Weight",
    WEIGHT_FIELD_NAME = "weight",
    WEIGHT_FIELD_ID = "weight",
    AGE_FIELD_LABEL = "Age",
    AGE_FIELD_ID = "age",
    AGE_FIELD_NAME = "age",
    AGE_YOUNG = "10 - 18",
    AGE_MIDDLE = "18 - 30",
    AGE_OLD = "31 - 60+",
    SEX_FIELD_LABEL = "Sex",
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

export const StepTwo: React.FC<Partial<StepWizardChildProps>> = ({ previousStep }) => {
    const [initialValues] = useState<StepTwoInterface>({
        activities: [{
            activityType: "running",
            activityAmount: 5
        }, {
            activityType: "running",
            activityAmount: 5
        }]
    });

    console.log(initialValues)
    const dispatch = useDispatch();

    const handleOnSubmit = useCallback(
        (values, actions) => {
            //    dispatch(addStepOneUserData(values));
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
                                            <div key={index} className="step-two--select-field">
                                                <label> {StepOneForm.AGE_FIELD_LABEL} </label>
                                                <Field
                                                    as={StepOneForm.SELECT_FIELD_TYPE}
                                                    id={StepOneForm.AGE_FIELD_ID}
                                                    name={`activities[${index}].activityType`}
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
                                                <label> {StepOneForm.AGE_FIELD_LABEL} </label>
                                                <Field
                                                    placeholder={StepOneForm.WEIGHT_FIELD_LABLE}
                                                    as={NumberInput}
                                                    id={StepOneForm.WEIGHT_FIELD_ID}
                                                    name={`activities[${index}].activityAmount`}
                                                    test="lol"
                                                />
                                                <button onClick={() => remove(index)}>
                                                    Delete
                                                </button>
                                            </div>
                                        ))}
                                        {values.activities.length < 5 ?
                                            <button onClick={() => push({ activityType: "", activityAmount: 0 })} >
                                                Add More Activities
                                            </button>
                                            : null
                                        }
                                    </>
                                )}
                            </FieldArray>
                        </div>
                        <div>
                            <button onClick={previousStep} type="submit">
                                {StepTwoForm.PREVIOUS_STEP_BTN_TEXT}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default StepTwo;