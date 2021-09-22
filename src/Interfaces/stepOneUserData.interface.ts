export interface StepOneUserData {
    stepOneUserData: StepOneInterface
}

export interface StepsUserData {
    stepOneUserData: StepOneInterface,
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