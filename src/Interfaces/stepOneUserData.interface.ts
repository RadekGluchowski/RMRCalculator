export interface StepOneUserData {
    stepOneUserData: object
}

export interface StepsUserData {
    stepOneUserData: object,
    stepTwoUserData: object,
    stepOneSummary: number,
    stepTwoSummary: number,
}

export interface StepOneInterface {
    weight: number;
    age: string;
    sex: string;
    personType: string;
}